import NextHead from 'next/head'
import { useTheme } from 'next-themes'

const defaultOgImage =
  'https://res.cloudinary.com/dsdlhtnpw/image/upload/v1572673557/og-image_budbm8.png'

interface Props {
  title?: string
  description?: string
  image?: string
}

const Head: React.FC<Props> = ({
  title = 'Paco Coursey',
  description = "Hi, I'm Quy. A frontend engineer.",
  image = defaultOgImage,
  children,
}): JSX.Element => {
  const { systemTheme } = useTheme()

  return (
    <NextHead>
      {/* Preload font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"
        rel="stylesheet"
      />

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
      {/* ----- TODO ----- */}
      {/* <link rel="manifest" href="/favicons/manifest.json" />
      <meta name="theme-color" content="#000000" />
      <link rel="mask-icon" href="/favicons/pinned.svg" color="#000000" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      /> */}

      {/* Dynamic favicon */}
      {/* ----- TODO ----- */}
      {!systemTheme || systemTheme === 'dark' ? (
        <>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicon.ico"
            key="dynamic-favicon-alternate"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/vercel.svg"
            key="dynamic-favicon"
          />
        </>
      ) : (
        <>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicon.ico"
            key="dynamic-favicon-alternate"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/vercel.svg"
            key="dynamic-favicon"
          />
        </>
      )}
      {children}
    </NextHead>
  )
}

export default Head
