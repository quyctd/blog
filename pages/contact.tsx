import Page from '@components/page'

const Contact = () => {
  return (
    <Page title="Contact" description="Get in touch.">
      <article>
        <p>Get in touch.</p>

        <blockquote>
          <a href="mailto:quy.dc98@gmail.com?subject=Hello" className="reset">
            quy.dc98@gmail.com
          </a>
        </blockquote>
      </article>
    </Page>
  )
}

export default Contact
