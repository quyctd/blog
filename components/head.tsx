import { FC } from 'react'
import NextHead from 'next/head'
import { useTheme } from 'next-themes'

interface Props {
  title?: string
  description?: string
  image?: string
}

const Head: FC<Props> = ({
  title = 'Quy Dinh',
  description = "Hi, I'm Quy. A frontend engineer.",
  image = 'https://www.quyctd.dev/og.png',
  children,
}): JSX.Element => {
  const { systemTheme } = useTheme()

  return (
    <NextHead>
      {/* Title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* Image */}
      <meta name="twitter:image" content={image} />
      <meta name="og:image" content={image} />

      {/* URL */}
      <meta name="og:url" content="https://quyctd.dev" />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@quyctd" />
      <meta name="apple-mobile-web-app-title" content="quyctd" />
      <meta name="author" content="quyctd" />

      {/* RSS feed */}
      {/* ----- TODO ----- */}
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS Feed for quyctd.dev"
        href="/feed.xml"
      />

      {/* Favicons */}
      <link rel="manifest" href="/favicons/manifest.json" />
      <meta name="theme-color" content="#000000" />
      <link rel="mask-icon" href="/favicons/pinned.svg" color="#000000" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />

      {/* Dynamic favicon */}
      {/* ----- TODO ----- */}
      {!systemTheme || systemTheme === 'dark' ? (
        <>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicons/dark.ico"
            key="dynamic-favicon-alternate"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicons/dark.svg"
            key="dynamic-favicon"
          />
        </>
      ) : (
        <>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicons/light.ico"
            key="dynamic-favicon-alternate"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicons/light.svg"
            key="dynamic-favicon"
          />
        </>
      )}
      {children}
    </NextHead>
  )
}

export default Head
