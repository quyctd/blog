import Page from '@components/page'
import Link from '@components/link'

const About = () => {
  return (
    <Page description="Hi, I'm Quy. A frontend engineer.">
      <article>
        <h1>Quy(Andrew) Dinh</h1>

        <p>
          A frontend engineer,{' '}
          <Link underline href="/keyboards">
            mechanical keyboard
          </Link>{' '}
          enthusiast, practicing minimalist.{' '}
          <Link underline href="/blog">
            Writing
          </Link>{' '}
          about design and code.
        </p>

        <p>
          Working with{' '}
          <Link
            underline
            href="https://vietnamdevcenter.linecorp.com/en"
            external
          >
            LINE
          </Link>{' '}
          to closing the distances.
        </p>
      </article>
    </Page>
  )
}

export default About
