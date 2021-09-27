import Link from '@components/link'

import styles from './navigation.module.css'

const Navigation = ({ previous, next }: any) => {
  return (
    <div className={styles.navigation}>
      <div className={styles.previous}>
        {previous && (
          <Link href="/blog/[slug]" gray as={`/blog/${previous.slug}`}>
            <div className={styles.title}>← Older</div>
            {previous.title}
          </Link>
        )}
      </div>

      <div className={styles.next}>
        {next && (
          <Link href="/blog/[slug]" gray as={`/blog/${next.slug}`}>
            <div className={styles.title}>Newer →</div>
            {next.title}
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navigation
