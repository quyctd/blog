import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const getPosts = () => {
  const posts = fs
    .readdirSync('./posts/')
    .filter((file) => path.extname(file) === '.md')
    .map((file) => {
      const postContent = fs.readFileSync(`./posts/${file}`, 'utf8')
      const { data, content } = matter(postContent)
      if (data.published === false) {
        return null
      }

      return { ...data, body: content } as any
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())

  // Metadata for searching posts
  const meta = posts.map((p) => ({ ...p, body: null }))
  fs.writeFileSync(
    path.resolve(process.cwd(), 'data/blog.json'),
    JSON.stringify(meta)
  )

  return posts
}
