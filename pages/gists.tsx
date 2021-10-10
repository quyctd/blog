import Page from '@components/page'
import Entry from '@components/entry'

import gistsData from '@data/gists.json'

const Gists = () => {
  const data = gistsData.data

  return (
    <Page
      title="Gists"
      description="Collection of softwares, technologies that I use or want to use."
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
            />
          )
        })}
      </article>
    </Page>
  )
}

export default Gists
