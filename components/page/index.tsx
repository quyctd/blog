import { FC } from 'react'

import Head from '@components/head'
import Header from '@components/header'

interface Props {
  header?: boolean
  showHeaderTitle?: boolean
  title?: string
  description?: string
  image?: string
}

const Page: FC<Props> = ({
  header = true,
  showHeaderTitle = true,
  title,
  description,
  image,
  children,
}): JSX.Element => {
  const year = new Date().getFullYear()

  return (
    <div className="grid min-h-screen grid-rows-layout pb-16">
      <Head
        title={`${title ? `${title} | ` : ''}quyctd`}
        description={description}
        image={image}
      />
      {header && <Header title={showHeaderTitle && title} />}

      <main className="prose prose-lg mx-auto my-0 max-w-[45rem] px-4 dark:prose-invert">
        {children}
      </main>
      <footer className="">
        <p className="flex items-center justify-center text-sm text-gray-500">
          &copy; {year} quyctd
        </p>
      </footer>
    </div>
  )
}

export default Page
