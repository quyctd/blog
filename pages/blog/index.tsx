import Page from '@components/page'
import { getPosts } from '@lib/get-posts'

interface Props {
  posts: any[]
}

const Blog: React.FC<Props> = ({ posts }) => {
  return (
    <Page title="Blog" description="The World As I See It">
      <article>
        <ul>{posts.map((post) => post.title)}</ul>
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
