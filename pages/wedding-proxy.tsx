import type { GetServerSideProps } from 'next'
import * as cheerio from 'cheerio'
import type { Element } from 'domhandler'

const ZENLOVE_WEDDING = 'https://zenlove.me/go/quy-tesssst'
const PROXY_PREFIX = '/wedding-proxy'
const ZENLOVE_ORIGIN = 'https://zenlove.me'

/**
 * Rewrite root-relative and ZenLove absolute URLs so assets and links go through our proxy.
 * Covers _next, src, href, srcset, data-src, data-srcset, style url(), and full origin.
 */
function rewriteProxiedHtml(html: string, proxyOrigin: string): string {
  const prefixAttr = (attr: string) =>
    new RegExp(`(${attr})=["']\\/(?!wedding-proxy)([^"']*)["']`, 'g')

  return html
    .replace(/"_next\//g, `"${PROXY_PREFIX}/_next/`)
    .replace(/'\/(_next\/)/g, `'${PROXY_PREFIX}/$1`)
    .replace(
      /(src|href)=["']\/(?!wedding-proxy)([^"']*)["']/g,
      `$1="${PROXY_PREFIX}/$2"`
    )
    .replace(prefixAttr('srcset'), (_, attr, value) => {
      const rewritten = value.split(',').map((part: string) => {
        const trimmed = part.trim()
        const firstSlash = trimmed.indexOf('/')
        const url = firstSlash === 0 ? PROXY_PREFIX + trimmed : trimmed
        return url
      })
      return `${attr}="${rewritten.join(', ')}"`
    })
    .replace(prefixAttr('data-src'), `data-src="${PROXY_PREFIX}/$2"`)
    .replace(prefixAttr('data-srcset'), `data-srcset="${PROXY_PREFIX}/$2"`)
    .replace(/content=["']\/(?!wedding-proxy)([^"']*)["']/g, `content="${PROXY_PREFIX}/$1"`)
    .replace(/url\(\/(?!wedding-proxy)([^)]*)\)/g, `url(/${PROXY_PREFIX}/$1)`)
    .replace(/url\(\s*["']?\/(?!wedding-proxy)([^"')]+)["']?\s*\)/g, `url(/${PROXY_PREFIX}/$1)`)
    .replace(/\/go\/quy-tesssst(\/[^"'\s)*]*)?/g, `${PROXY_PREFIX}$1`)
    .replace(new RegExp(escapeRe(ZENLOVE_ORIGIN), 'g'), proxyOrigin)
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/** Remove the innermost div(s) that contain the text "Quà Tặng" from initial HTML. */
function removeGiftSection(html: string): string {
  const $ = cheerio.load(html)
  const toRemove: Element[] = []
  $('div').each((_i: number, el: Element) => {
    const $el = $(el)
    if (!$el.text().includes('Quà Tặng')) return
    const hasNested = $el.find('div').toArray().some((child: Element) => $(child).text().includes('Quà Tặng'))
    if (!hasNested) toRemove.push(el)
  })
  for (const el of toRemove) $(el).remove()
  return $.html()
}

/** Remove all img elements inside nodes with class "menu-v2". */
function removeMenuV2Images(html: string): string {
  const $ = cheerio.load(html)
  $('.menu-v2 img').remove()
  return $.html()
}

/** Hide only the direct div that contains text "Quà Tặng" (innermost such div), not the modal/drawer. */
const GIFT_HIDE_INJECTION = `
<script id="wedding-proxy-gift-hide-script">
(function(){
  function hasQuaTang(el){
    return el && el.textContent && el.textContent.includes('Quà Tặng');
  }
  function isInnermostQuaTangDiv(el){
    if (el.tagName !== 'DIV' || !hasQuaTang(el)) return false;
    var children = el.querySelectorAll('*');
    for (var i = 0; i < children.length; i++) { if (hasQuaTang(children[i])) return false; }
    return true;
  }
  function hideDirectQuaTangDivs(root){
    if (!root) return;
    var divs = root.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
      if (isInnermostQuaTangDiv(divs[i])) divs[i].style.setProperty('display', 'none', 'important');
    }
  }
  var obsAttached = false;
  var obs = new MutationObserver(function(mutations){
    mutations.forEach(function(m){
      m.addedNodes.forEach(function(node){
        if (node.nodeType !== 1) return;
        hideDirectQuaTangDivs(node);
        removeMenuV2Imgs(node);
        if (node.tagName === 'DIV' && isInnermostQuaTangDiv(node)) node.style.setProperty('display', 'none', 'important');
      });
    });
  });
  function removeMenuV2Imgs(root){
    if (!root || !root.querySelectorAll) return;
    var menus = root.classList && root.classList.contains('menu-v2') ? [root] : [];
    if (menus.length === 0) menus = root.querySelectorAll('.menu-v2');
    for (var i = 0; i < menus.length; i++) {
      menus[i].style.setProperty('height', '35px', 'important');
      var imgs = menus[i].querySelectorAll('img');
      for (var j = 0; j < imgs.length; j++) imgs[j].remove();
    }
  }
  function run(){
    hideDirectQuaTangDivs(document.body);
    removeMenuV2Imgs(document.body);
    if (document.body && !obsAttached) { obsAttached = true; obs.observe(document.body, { childList: true, subtree: true }); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
  setTimeout(run, 100);
  setTimeout(run, 500);
})();
</script>
`

/** Injects script to hide only the direct div containing "Quà Tặng", not the modal/drawer. */
function injectGiftHiding(html: string): string {
  const $ = cheerio.load(html)
  $('head').append(GIFT_HIDE_INJECTION)
  return $.html()
}

/**
 * /wedding-proxy: fetch ZenLove (Next.js) HTML and rewrite asset/link URLs
 * so they go through our proxy; then stream the modified HTML.
 */
export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  if (req.method !== 'GET') {
    res.statusCode = 405
    res.end()
    return { props: {} }
  }

  const response = await fetch(ZENLOVE_WEDDING, {
    headers: {
      'User-Agent': req.headers['user-agent'] ?? 'Mozilla/5.0',
      Accept: 'text/html,application/xhtml+xml',
      'Accept-Language': req.headers['accept-language'] ?? 'en',
    },
  })

  if (!response.ok) {
    res.statusCode = response.status
    res.end()
    return { props: {} }
  }

  const html = await response.text()
  const protocol = req.headers['x-forwarded-proto'] ?? 'http'
  const host = req.headers.host ?? ''
  const proxyOrigin = `${protocol}://${host}${PROXY_PREFIX}`
  const rewritten = rewriteProxiedHtml(html, proxyOrigin)
  const withoutGiftSection = removeGiftSection(rewritten)
  const withoutMenuV2Imgs = removeMenuV2Images(withoutGiftSection)
  const withGiftHidden = injectGiftHiding(withoutMenuV2Imgs)

  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300')
  res.write(withGiftHidden)
  res.end()

  return { props: {} }
}

// Page component never renders when we send the response above
const WeddingProxyPage = () => null
export default WeddingProxyPage
