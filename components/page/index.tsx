import Head from '@components/head'
import Header from '@components/header'
import styles from './page.module.css'

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
    <div className={styles.wrapper}>
      <Head
        title={`${title ? `${title} | ` : ''}quyctd`}
        description={description}
        image={image}
      />
      {header && <Header title={showHeaderTitle && title} />}

      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Page
