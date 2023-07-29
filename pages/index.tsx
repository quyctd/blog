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
          I have few interests, listening to music, watching anime, UI and
          UX,... currently practicing minimalism. Focus on developing a wide
          range of skills in diverse fields that would complement each other in
          unexpected ways.
        </p>
      </article>
    </Page>
  )
}

export default About
