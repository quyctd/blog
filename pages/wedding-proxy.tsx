import type { GetServerSideProps } from 'next'
import * as cheerio from 'cheerio'
import type { Element } from 'domhandler'

const ZENLOVE_WEDDING = 'https://zenlove.me/s/quy-hai-220326'
const PROXY_PREFIX = '/wedding-proxy'
const ZENLOVE_ORIGIN = 'https://zenlove.me'
const API_ZENLOVE_ORIGIN = 'https://api.zenlove.me'
const CDN_ZENLOVE_ORIGIN = 'https://cdn.zenlove.me'
const CDN_RESOURCE_ORIGIN = 'https://cdn-resource.zenlove.me'

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
    .replace(/\/go\/quy-hai-220326(\/[^"'\s)*]*)?/g, `${PROXY_PREFIX}$1`)
    .replace(/(["'])\/api\/auth\b/g, `$1${PROXY_PREFIX}/api/auth`)
    .replace(new RegExp(escapeRe(ZENLOVE_ORIGIN), 'g'), proxyOrigin)
    // Route API through proxy so RSVP/comment POSTs are same-origin
    .replace(new RegExp(escapeRe(API_ZENLOVE_ORIGIN), 'g'), `${proxyOrigin}/api-zenlove`)
    // Route CDN through our proxy (full and protocol-relative URLs)
    .replace(new RegExp(escapeRe(CDN_ZENLOVE_ORIGIN), 'g'), `${proxyOrigin}/cdn-zenlove`)
    .replace(new RegExp(escapeRe(CDN_RESOURCE_ORIGIN), 'g'), `${proxyOrigin}/cdn-resource`)
    .replace(/\/\/cdn\.zenlove\.me\b/g, `${proxyOrigin}/cdn-zenlove`)
    .replace(/\/\/cdn-resource\.zenlove\.me\b/g, `${proxyOrigin}/cdn-resource`)
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

/** Intercept fetch/XHR so JS-built URLs go through our proxy; inject pageId for /v1/rsvp. */
const RSVP_PAGE_ID = 'quy-hai-220326'
const URL_REWRITE_INJECTION = `
<script id="wedding-proxy-rewrite-urls">
(function(){
  var base = window.location.origin + '/wedding-proxy';
  var rsvpPageId = '${RSVP_PAGE_ID}';
  function rewriteCdnUrl(url){
    if (!url || typeof url !== 'string') return url;
    if (url.indexOf('https://cdn.zenlove.me') === 0) return base + '/cdn-zenlove' + url.slice(22);
    if (url.indexOf('https://cdn-resource.zenlove.me') === 0) return base + '/cdn-resource' + url.slice(28);
    if (url.indexOf('//cdn.zenlove.me') === 0) return base + '/cdn-zenlove' + url.slice(16);
    if (url.indexOf('//cdn-resource.zenlove.me') === 0) return base + '/cdn-resource' + url.slice(22);
    return url;
  }
  function rewriteElement(el){
    if (el.href) { var u = rewriteCdnUrl(el.href); if (u !== el.href) el.href = u; }
    if (el.src) { var s = rewriteCdnUrl(el.src); if (s !== el.src) el.src = s; }
  }
  function rewriteCdnLinksInDom(){
    document.querySelectorAll('link[href], script[src]').forEach(rewriteElement);
  }
  rewriteCdnLinksInDom();
  var obs = new MutationObserver(function(mutations){
    mutations.forEach(function(m){ m.addedNodes.forEach(function(n){ if (n.nodeType === 1 && (n.tagName === 'LINK' || n.tagName === 'SCRIPT')) rewriteElement(n); }); });
  });
  if (document.documentElement) obs.observe(document.documentElement, { childList: true, subtree: true });
  if (document.readyState !== 'complete') window.addEventListener('load', rewriteCdnLinksInDom);
  setTimeout(rewriteCdnLinksInDom, 0);
  setTimeout(rewriteCdnLinksInDom, 100);
  function rewriteUrl(url){
    if (typeof url !== 'string') return url;
    if (url.indexOf('https://api.zenlove.me') === 0) return base + '/api-zenlove' + url.slice(19);
    if (url.indexOf('https://cdn.zenlove.me') === 0) return base + '/cdn-zenlove' + url.slice(22);
    if (url.indexOf('https://cdn-resource.zenlove.me') === 0) return base + '/cdn-resource' + url.slice(28);
    if (url.charAt(0) === '/' && (url === '/api/auth' || url.indexOf('/api/auth/') === 0)) return base + url;
    return url;
  }
  function injectPageId(body) {
    if (typeof body !== 'string') return body;
    try {
      var o = JSON.parse(body);
      o.pageId = rsvpPageId;
      return JSON.stringify(o);
    } catch (e) { return body; }
  }
  var origFetch = window.fetch;
  window.fetch = function(input, init) {
    init = init || {};
    var url = typeof input === 'string' ? input : (input && input.url);
    url = rewriteUrl(url);
    var isRsvp = url.indexOf('/v1/rsvp') !== -1;
    if (isRsvp && typeof input === 'string' && typeof init.body === 'string') {
      init = Object.assign({}, init, { body: injectPageId(init.body) });
      return origFetch.call(this, url, init);
    }
    if (isRsvp && input && input.body && typeof input.clone === 'function') {
      return input.clone().text().then(function(text) {
        var body = injectPageId(text);
        return origFetch.call(this, new Request(url, { method: input.method, headers: input.headers, body: body }));
      }.bind(this));
    }
    if (typeof input === 'string') input = url;
    else if (input && input.url) input = new Request(url, input);
    return origFetch.call(this, input, init);
  };
  var NativeXHR = window.XMLHttpRequest;
  window.XMLHttpRequest = function() {
    var xhr = new NativeXHR();
    var origOpen = xhr.open;
    var origSend = xhr.send;
    xhr.open = function(method, url, a, b, c) {
      arguments[1] = rewriteUrl(url);
      xhr._url = arguments[1];
      return origOpen.apply(this, arguments);
    };
    xhr.send = function(body) {
      if (xhr._url && xhr._url.indexOf('/v1/rsvp') !== -1 && typeof body === 'string')
        body = injectPageId(body);
      return origSend.call(this, body);
    };
    return xhr;
  };
})();
</script>
`

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

/** Injects URL-rewrite interceptor (first) and gift-hide script. */
function injectGiftHiding(html: string): string {
  const $ = cheerio.load(html)
  $('head').prepend(URL_REWRITE_INJECTION)
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
