import { memo } from 'react'
import NextLink from 'next/link'
import cn from 'clsx'

import styles from './link.module.css'

interface IProps {
  external?: boolean
  href: string
  as?: string
  passHref?: boolean
  className?: string
  underline?: boolean
  gray?: boolean
  [key: string]: any
}

const canPrefetch = (href: string) => {
  if (!href || !href.startsWith('/')) {
    return false
  }

  return true
}

const Link: React.FC<IProps> = ({
  external,
  href,
  as,
  passHref,
  children,
  className,

  // Styling
  underline,
  gray,
  ...props
}) => {
  const c = cn(className, styles.reset, {
    [styles.gray]: gray,
    [styles.underline]: underline,
  })

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={c}
        {...props}
      >
        {children}
      </a>
    )
  }

  return <>
    <NextLink
      href={href}
      as={as}
      prefetch={canPrefetch(href) ? undefined : false}
      passHref={passHref}
      legacyBehavior>
      {passHref ? (
        children
      ) : (
        <a className={c} {...props}>
          {children}
        </a>
      )}
    </NextLink>
  </>;
}

export default memo(Link)
