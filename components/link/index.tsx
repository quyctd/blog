import { memo } from 'react'
import NextLink from 'next/link'
import { twMerge } from 'tailwind-merge'

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

const grayClasses =
  'text-[#888] dark:text-[#666] hover:text-[#000] dark:hover:text-[#fafbfc] focus:text-[#000] dark:focus:text-[#fafbfc]'
export const underlineClasses =
  'hover:text-[#888] hover:dark:text-[#666] focus:text-[#888] focus:dark:text-[#666] bg-left-bottom bg-no-repeat bg-[length:100%_1px] bg-gradient-to-r from-[#888] to-[#888] dark:from-[#666] dark:to-[#666]'

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
  // className="
  const c = twMerge(
    'outline-none no-underline text-[#000] dark:text-[#fafbfc]',
    className,
    gray && grayClasses,
    underline && underlineClasses
  )
  // "

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

  return (
    <>
      <NextLink
        href={href}
        as={as}
        prefetch={canPrefetch(href) ? undefined : false}
        passHref={passHref}
        legacyBehavior
      >
        {passHref ? (
          children
        ) : (
          <a className={c} {...props}>
            {children}
          </a>
        )}
      </NextLink>
    </>
  )
}

export default memo(Link)
