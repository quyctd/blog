import { marked } from 'marked'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { renderToStaticMarkup } from 'react-dom/server'
import { format } from 'prettier'

import linkStyles from '../components/link/link.module.css'

const renderer = new marked.Renderer()

renderer.heading = (text, level, _raw, slugger) => {
  const id = slugger.slug(text)
  const Component = `h${level}` as keyof JSX.IntrinsicElements

  return renderToStaticMarkup(
    <Component>
      <a href={`#${id}`} id={id} className="header-link">
        {text}
      </a>
    </Component>
  )
}

renderer.link = (href, _, text) =>
  `<a href=${href} target="_blank" rel="noopener noreferrer" class="${linkStyles.underline}">${text}</a>`

renderer.checkbox = () => ''

renderer.listitem = (text, task, checked) => {
  if (task) {
    return `<li class="reset"><span class="check">&#8203;<input type="checkbox" disabled ${
      checked ? 'checked' : ''
    } /></span><span>${text}</span></li>`
  }

  return `<li>${text}</li>`
}

renderer.code = (code: string, options: string) => {
  console.log(options)
  const opts = options.split(' ').map((o) => o.trim())
  const language = opts[0]
  const highlight = opts
    .filter((o) => o.startsWith('highlight='))
    .pop()
    ?.replace('highlight=', '')
    .trim() as string
  const raw = options.includes('raw')

  // Touch it up with Prettier
  let formattedCode = code

  if (!raw) {
    try {
      formattedCode = format(code, {
        semi: false,
        singleQuote: true,
        parser: language === 'jsx' || language === 'tsx' ? 'babel' : language,
      })
    } catch (e) {} // Don't really mind if it fails
  }

  return renderToStaticMarkup(
    <pre>
      <Code language={language as Language} code={formattedCode} highlight={highlight} />
    </pre>
  )
}

marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: true,
  renderer,
})

export default (markdown: string) => marked(markdown)

interface CodeProps {
  code: string
  language?: Language
  highlight?: string
  [key: string]: any
}

const Code = ({ code, language, highlight, ...props }: CodeProps) => {
  if (!language)
    return <code {...props} dangerouslySetInnerHTML={{ __html: code }} />

  const highlightedLines: number[] = highlight
    ? highlight.split(',').reduce((lines: number[], h: string) => {
        if (h.includes('-')) {
          // Expand ranges like 3-5 into [3,4,5]
          const [start, end] = h.split('-').map(Number)
          const x = Array(end - start + 1)
            .fill(0)
            .map((_, i) => i + start)
          return [...lines, ...x]
        }

        return [...lines, Number(h)]
      }, [])
    : []

  const { theme, ...renderProps } = defaultProps

  return (
    <Highlight {...renderProps} code={code.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <code className={className} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line, key: i })}
              style={
                highlightedLines.includes(i + 1)
                  ? {
                      background: 'var(--highlight)',
                      margin: '0 -1rem',
                      padding: '0 1rem',
                    }
                  : undefined
              }
            >
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </code>
      )}
    </Highlight>
  )
}
