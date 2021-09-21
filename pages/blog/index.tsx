import Page from '@components/page'

interface Props {
  posts: any[]
}

const Blog: React.FC<Props> = ({ posts }) => {
  return (
    <Page title="Blog" description="The World As I See It">
      <article>
        <ul>{posts.map((post) => post)}</ul>
      </article>
    </Page>
  )
}

export const getStaticProps = () => {
  const posts = [1, 2, 3]

  return {
    props: {
      posts,
    },
  }
}

export default Blog
