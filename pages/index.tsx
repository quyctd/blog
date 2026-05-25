import Page from '@components/page'
import Link from '@components/link'

const About = () => {
  return (
    <Page description="Hi, I'm Quy. A product engineer.">
      <article>
        <h1>Quy Dinh</h1>
        <p>
          Product engineer based in Hanoi, Vietnam. 2 years into building an AI product that&apos;s grown to $500K in revenue — working across the stack.
        </p>
        <p>
          I care deeply about details and user experience, and strongly believe in the power of simplicity in both design and engineering. My life philosophy is rooted in versatility — seeking to develop a wide range of skills in diverse fields that complement each other in unexpected ways.
        </p>
        <p>
          Get in touch —{' '}
          <Link underline href="mailto:quy.dc98@gmail.com">quy.dc98@gmail.com</Link>
          {' '}or{' '}
          <Link underline href="https://www.linkedin.com/in/quyctd/">LinkedIn</Link>.
        </p>
      </article>
    </Page>
  )
}

export default About
