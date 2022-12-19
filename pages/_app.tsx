import type { AppProps } from 'next/app'
import Router from 'next/router'
import { ThemeProvider } from 'next-themes'

import nprogress from 'nprogress'

import '@styles/globals.scss'

Router.events.on('routeChangeStart', () => nprogress.start())
Router.events.on('routeChangeComplete', () => {
  nprogress.done()
  window.scrollTo(0, 0)
})
Router.events.on('routeChangeError', () => nprogress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
