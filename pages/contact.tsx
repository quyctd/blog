import Page from '@components/page'
import Entry from '@components/entry'

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
        <Entry
          title="Github"
          image="https://img1.wallspic.com/originals/2/7/8/5/5/155872-github-logo-azure-aqua-turquoise-1920x1080.png"
          href="https://github.com/quyctd"
          description=""
        />
        <Entry
          title="LinkedIn"
          image="https://img.freepik.com/free-photo/linkedin-square-button-icon-3d-with-copy-space-3d-rendering_368797-207.jpg?size=626&ext=jpg"
          href="https://www.linkedin.com/in/quyctd/"
          description=""
        />
        <Entry
          title="Twitter"
          image="https://images.macrumors.com/t/NKjHcwrcQueA4BBHpB26DimMS64=/1600x0/article-new/2021/03/Twitter-Feature.jpg"
          href="https://www.facebook.com/akashi.211/"
          description=""
        />
      </article>
    </Page>
  )
}

export default Contact
