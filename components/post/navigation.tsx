import Link from '@components/link'

const navLinkClasses =
  'block text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'

const Navigation = ({ previous, next }: any) => {
  return (
    <div className="mx-0 my-16 flex items-start justify-between gap-8">
      <div>
        {previous && (
          <Link
            href="/blog/[slug]"
            as={`/blog/${previous.slug}`}
            className={navLinkClasses}
          >
            <div className="mb-1 text-xs font-normal text-neutral-400 dark:text-neutral-500">
              ← Older
            </div>
            {previous.title}
          </Link>
        )}
      </div>

      <div className="text-right">
        {next && (
          <Link
            href="/blog/[slug]"
            as={`/blog/${next.slug}`}
            className={navLinkClasses}
          >
            <div className="mb-1 text-xs font-normal text-neutral-400 dark:text-neutral-500">
              Newer →
            </div>
            {next.title}
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navigation
