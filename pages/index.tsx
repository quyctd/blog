import Page from '@components/page'
import Link from '@components/link'

const About = () => {
  return (
    <Page description="Hi, I'm Quy. A frontend engineer.">
      <article>
        <h1>Quy Dinh</h1>
        <p>
          A Front-End engineer, b. 1998, live in Hanoi, Vietnam. Currently
          working at{' '}
          <Link underline href="https://line.me" external>
            LINE
          </Link>
          . Alias as{' '}
          <Link underline href="https://github.com/quyctd" external>
            @quyctd
          </Link>{' '}
          on the internet.
        </p>
        <p>
          Interested in UI and UX, system design, practicing minimalist. Focus
          on{' '}
          <Link underline href="/reading">
            reading
          </Link>
          , thinking and learning. Always open to interesting conversations and
          collaboration.
        </p>
      </article>
    </Page>
  )
}

export default About
