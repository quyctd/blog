import { useState, FC } from 'react'

import TextEntry from '@components/entry/text'
import IPostMeta from '@interfaces/post-meta'

interface Props {
  posts: IPostMeta[]
  paginate?: boolean
}

const Posts: FC<Props> = ({ posts, paginate }) => {
  const [showMore, setShowMore] = useState(3)

  return (
    <div className="mx-auto my-0 max-w-[45rem]">
      {posts.slice(0, paginate ? showMore : undefined).map((post) => {
        const date = new Date(post.date).toLocaleDateString('default', {
          month: '2-digit',
          day: '2-digit',
          year: '2-digit',
        })

        return (
          <TextEntry
            key={`post-item-${post.slug}`}
            href="/blog/[slug]"
            as={`/blog/${post.slug}`}
            title={post.title}
            type={date}
            description={post.description}
          />
        )
      })}
      {paginate && showMore < posts.length && (
        <button
          onClick={() => {
            setShowMore(showMore + 3)
          }}
          className="mt-16 w-full cursor-pointer rounded-lg border-none bg-[#f5f5f5] px-4 py-2 font-[500] text-[#888] outline-none transition-all hover:text-[#000] focus:text-[#000] active:bg-[#fafafa] dark:bg-[#222] dark:text-[#666] dark:hover:text-[#fafbfc] dark:focus:text-[#fafbfc] dark:active:bg-[#1a1a1a]"
        >
          Show More
        </button>
      )}
    </div>
  )
}

export default Posts
