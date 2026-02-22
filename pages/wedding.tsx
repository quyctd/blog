import Head from '@components/head'

const WEDDING_URL = 'https://zenlove.me/go/quy-tesssst'

/**
 * Wedding invitation page: embeds ZenLove invitation at /wedding.
 * Uses iframe so the external site loads with correct assets and behavior.
 */
const WeddingPage = () => {
  return (
    <>
      <Head title="Thiệp Cưới | quyctd">
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <iframe
        src={WEDDING_URL}
        className="fixed inset-0 h-full w-full border-0"
        title="Thiệp cưới"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        allow="fullscreen"
      />
    </>
  )
}

export default WeddingPage
