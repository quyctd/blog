import Page from '@components/page'
import Link from '@components/link'
import Section from '@components/home/Section'
import Intro from '@components/home/Intro'
import AppCard from '@components/home/AppCard'
import ExperienceList from '@components/home/ExperienceList'
import { projects } from '@data/projects'
import { roles } from '@data/experience'

const inlineLinkClasses =
  'text-neutral-900 underline underline-offset-4 dark:text-neutral-100'

const Home = () => {
  return (
    <Page
      prose={false}
      description="Quy Dinh — product engineer in Hanoi, Vietnam. Building AI products by day, shipping indie iOS apps by night."
    >
      <Intro />

      <Section id="experience" title="Experience">
        <ExperienceList roles={roles} />
      </Section>

      <Section id="apps" title="Apps">
        <div className="space-y-4">
          {projects.map((project) => (
            <AppCard key={project.name} project={project} />
          ))}
        </div>
      </Section>

      <Section id="writing" title="Writing">
        <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400">
          I occasionally write about CSS and frontend —{' '}
          <Link href="/blog" className={inlineLinkClasses}>
            read the blog
          </Link>
          .
        </p>
      </Section>

      <Section id="contact" title="Contact">
        <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400">
          Always open to interesting conversations and collaboration. Reach me
          at{' '}
          <Link href="mailto:quy.dc98@gmail.com" className={inlineLinkClasses}>
            quy.dc98@gmail.com
          </Link>{' '}
          or on{' '}
          <Link
            external
            href="https://www.linkedin.com/in/quyctd/"
            className={inlineLinkClasses}
          >
            LinkedIn
          </Link>
          . If you&apos;re in Hanoi, let&apos;s have coffee.
        </p>
      </Section>
    </Page>
  )
}

export default Home
