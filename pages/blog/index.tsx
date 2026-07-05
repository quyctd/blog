import { FC } from 'react'
import Page from '@components/page'
import PostsList from '@components/posts-list'
import { getPosts } from '@lib/get-posts'
import PostMeta from '@interfaces/post-meta'

interface Props {
  posts: PostMeta[]
}

const Blog: FC<Props> = ({ posts }) => {
  return (
    <Page title="Blog" description="The World As I See It" prose={false}>
      <ul className="m-0 list-none p-0">
        <PostsList posts={posts} />
      </ul>
    </Page>
  )
}

export const getStaticProps = () => {
  const posts = getPosts()

  return {
    props: {
      posts,
    },
  }
}

export default Blog
