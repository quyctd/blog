import Link from '@components/link'

const Navigation = ({ previous, next }: any) => {
  return (
    <div className="mx-0 my-16 flex items-center justify-between">
      <div className="font-[500] transition-colors">
        {previous && (
          <Link href="/blog/[slug]" gray as={`/blog/${previous.slug}`}>
            <div className="mb-2 font-normal leading-none">← Older</div>
            {previous.title}
          </Link>
        )}
      </div>

      <div className="text-right font-[500] transition-colors">
        {next && (
          <Link href="/blog/[slug]" gray as={`/blog/${next.slug}`}>
            <div className="mb-2 font-normal leading-none">Newer →</div>
            {next.title}
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navigation
