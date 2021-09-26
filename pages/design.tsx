import Page from '@components/page'
import Entry from '@components/entry'

// Data
import designData from '@data/design.json'

const Design = () => {
  const data = designData.data

  return (
    <Page
      title="Design"
      description="Collection of beautiful websites and portfolios that I admire."
    >
      <article>
        {data.map((entry) => {
          return (
            <Entry
              key={`${entry.title}-${entry.url}`}
              title={entry.title}
              image={entry.image}
              href={entry.url}
              description={entry.description}
              position={entry?.position}
            />
          )
        })}
      </article>
    </Page>
  )
}

export default Design
