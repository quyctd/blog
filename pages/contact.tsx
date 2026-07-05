import Page from '@components/page'
import Link from '@components/link'

const Contact = () => {
  return (
    <Page title="Contact" description="Get in touch." prose={false}>
      <div className="space-y-4 text-base leading-7 text-neutral-600 dark:text-neutral-400">
        <p>
          You can reach me at{' '}
          <Link
            external
            href="https://www.facebook.com/quyctd/"
            className="text-neutral-900 underline underline-offset-4 dark:text-neutral-100"
          >
            @quyctd
          </Link>{' '}
          or{' '}
          <Link
            href="mailto:quy.dc98@gmail.com"
            className="text-neutral-900 underline underline-offset-4 dark:text-neutral-100"
          >
            quy.dc98@gmail.com
          </Link>
          .
        </p>
        <p>
          I&apos;m always open to interesting conversations and collaboration.
          If you&apos;re in Hanoi city, let&apos;s have some coffee.
        </p>
      </div>
    </Page>
  )
}

export default Contact
