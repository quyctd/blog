import Head from '@components/head'
import Header from '@components/header'

interface Props {
  header?: boolean
  showHeaderTitle?: boolean
  title?: string
  description?: string
  image?: string
}

const Page: React.FC<Props> = ({
  header = true,
  showHeaderTitle = true,
  title,
  description,
  image,
  children,
}): JSX.Element => {
  return (
    <div className="h-full pb-16">
      <Head
        title={`${title ? `${title} | ` : ''}quyctd`}
        description={description}
        image={image}
      />
      {header && <Header title={showHeaderTitle && title} />}

      <main className="prose prose-lg mx-auto my-0 max-w-[45rem] px-4 dark:prose-invert">
        {children}
      </main>
    </div>
  )
}

export default Page
