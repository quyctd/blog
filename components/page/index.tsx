import Head from '@components/head'
import styles from './page.module.css'

interface Props {
  title?: string
  description?: string
  image?: string
}

const Page: React.FC<Props> = ({
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

      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Page
