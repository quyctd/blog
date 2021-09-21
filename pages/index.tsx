import Page from '@components/page'
import Link from '@components/link'

const About = () => {
  return (
    <Page description="Hi, I'm Quy. A frontend engineer.">
      <article>
        <h1>Quy Dinh</h1>
        <p>
          A frontend engineer, b. 1998, live in Hanoi, Vietnam. Self alias as{' '}
          <Link underline href="https://github.com/quyctd" external>
            @quyctd
          </Link>{' '}
          on the internet.
        </p>
        <p>
          Interested in UI and UX, system design, practicing minimalist.{' '}
          <Link underline href="/read">
            Reading
          </Link>
          {', '}
          <Link underline href="/blog">
            writing
          </Link>{' '}
          about code and design. Enjoy listening to music, watching anime.
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
