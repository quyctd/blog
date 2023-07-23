import type { AppProps } from 'next/app'
import Router from 'next/router'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'

import nprogress from 'nprogress'

import '@styles/globals.scss'

Router.events.on('routeChangeStart', () => nprogress.start())
Router.events.on('routeChangeComplete', () => {
  nprogress.done()
  window.scrollTo(0, 0)
})
Router.events.on('routeChangeError', () => nprogress.done())

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp
