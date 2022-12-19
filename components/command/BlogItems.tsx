import { useRouter } from 'next/router'
import CommandItem from './CommandItem'
import postMeta from '@data/blog.json'

const BlogItems = () => {
  const router = useRouter()

  return (
    <>
      {postMeta.map((post, i) => (
        <CommandItem
          key={`blog-${post.title}-${i}`}
          onSelect={() => {
            router.push('/blog/[slug]', `/blog/${post.slug}`)
          }}
        >
          <span>{post.title}</span>
        </CommandItem>
      ))}
    </>
  )
}

export default BlogItems
