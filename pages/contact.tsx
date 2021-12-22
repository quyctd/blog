import Page from '@components/page'
import Link from '@components/link'

const Contact = () => {
  return (
    <Page title="Contact" description="Get in touch.">
      <p>You can reach me at <Link underline href="https://www.facebook.com/quyctd/">@quyctd</Link> or <Link underline href="mailto:quy.dc98@gmail.com">quy.dc98@gmail.com</Link>.</p>
      <p>I'm always open to interesting conversations and collaboration. If you're in Hanoi city, let's have some coffee.</p>
    </Page>
  )
}

export default Contact
