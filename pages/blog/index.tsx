import Page from '@components/page'
import PostsList from '@components/posts-list'
import { getPosts } from '@lib/get-posts'
import PostMeta from '@interfaces/post-meta'

interface Props {
  posts: PostMeta[]
}

const Blog: React.FC<Props> = ({ posts }) => {
  return (
    <Page title="Blog" description="The World As I See It">
      <article>
        <ul>
          <PostsList posts={posts} />
        </ul>
      </article>
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
