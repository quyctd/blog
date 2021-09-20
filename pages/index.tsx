import Page from '@components/page'
import Link from '@components/link'

const About = () => {
  return (
    <Page description="Hi, I'm Quy. A frontend engineer.">
      <article>
        <h1>Quy Dinh</h1>
        <p>A frontend engineer, b. 1998, live in Hanoi, Vietnam.</p>
        <p>
          Care about UI and UX, practicing minimalist.{' '}
          <Link underline href="/read">
            Reading
          </Link>
          ,{' '}
          <Link underline href="/blog">
            writing
          </Link>{' '}
          about code and design.
        </p>
        <p>
          Working at{' '}
          <Link
            underline
            href="https://vietnamdevcenter.linecorp.com/en"
            external
          >
            LINE Technology Vietnam
          </Link>{' '}
          with the mission closing the distances.
        </p>
      </article>
    </Page>
  )
}

export default About
