import Page from '@components/page'
import Entry from '@components/entry/text'

import useData from '@lib/use-data'
import readingData from '@data/reading.json'

const Reading = () => {
  const { items } = useData(readingData.data)

  return (
    <Page
      title="Reading"
      description="Collection of articles, blog posts, and videos that I enjoyed."
    >
      <article>
        <ul>
          {items.map((entry) => {
            return (
              <Entry
                key={entry.title}
                title={entry.title}
                href={entry.url}
                type={entry.key}
                description={entry.description}
              />
            )
          })}
        </ul>
      </article>
    </Page>
  )
}

export default Reading
