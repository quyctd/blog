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
    <>
      {posts.slice(0, paginate ? showMore : undefined).map((post) => {
        const date = new Date(post.date).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
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
        <li className="list-none">
          <button
            onClick={() => {
              setShowMore(showMore + 3)
            }}
            className="mt-12 w-full cursor-pointer rounded-lg border-none bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-500 outline-none transition-colors hover:text-neutral-900 focus:text-neutral-900 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100 dark:focus:text-neutral-100"
          >
            Show More
          </button>
        </li>
      )}
    </>
  )
}

export default Posts
