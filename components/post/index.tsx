import Head from 'next/head'

import Navigation from './navigation'
import Page from '@components/page'

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const Post = ({
  title,
  slug,
  html,
  hidden,
  og,
  description,
  date,
  previous,
  next,
}: any) => {
  return (
    <Page
      title={title}
      description={description}
      showHeaderTitle={false}
      image={
        og && og === true
          ? `https://res.flask-image.com/dsdlhtnpw/image/upload/${slug}.png`
          : og
      }
    >
      <Head>
        {hidden && <meta name="robots" content="noindex" />}
        {date && <meta name="date" content={date} />}
      </Head>

      <article
        dangerouslySetInnerHTML={{
          __html: `<span class="text-base font-[500]">${date}</span><h1 class="mt-4">${escapeHtml(
            title
          )}</h1>${html}`,
        }}
      />

      <Navigation previous={previous} next={next} />
    </Page>
  )
}

export default Post
