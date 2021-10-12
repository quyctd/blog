import Page from '@components/page'
import Link from '@components/link'

const About = () => {
  return (
    <Page description="Hi, I'm Quy. A frontend engineer.">
      <article>
        <h1>Quy Dinh</h1>
        <p>
          A newbie Front-End engineer, b. 1998, live in Hanoi, Vietnam. Self
          alias as{' '}
          <Link underline href="https://github.com/quyctd" external>
            @quyctd
          </Link>{' '}
          on the internet.
        </p>
        <p>
          Interested in UI and UX, system design, practicing minimalist.{' '}
          <Link underline href="/reading">
            Reading
          </Link>
          {', '}
          <Link underline href="/blog">
            writing
          </Link>{' '}
          about code and design. Enjoy listening to music, watching anime.
        </p>
      </article>
    </Page>
  )
}

export default About
