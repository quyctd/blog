import { memo, FC } from 'react'
import Link from '@components/link'

interface Props {
  title: string
  description: string
  type: string
  href: string
  as?: string
}

const TextEntry: FC<Props> = ({ title, description, type, href, as }) => {
  return (
    <li className="list-none border-t border-neutral-100 first:border-t-0 dark:border-neutral-800/60">
      <Link
        href={href}
        as={as}
        external={!as}
        title={`${title} (${description})`}
        className="group grid gap-y-1 py-5 no-underline outline-none sm:grid-cols-[10rem_1fr] sm:gap-x-8"
      >
        <div className="text-sm leading-6 tabular-nums text-neutral-400 dark:text-neutral-500">
          {type}
        </div>
        <div>
          <p className="m-0 line-clamp-2 break-words font-medium text-neutral-900 transition-colors group-hover:text-neutral-500 dark:text-neutral-100 dark:group-hover:text-neutral-400 sm:line-clamp-1">
            {title}
          </p>
          {description && (
            <p className="m-0 mt-1 line-clamp-2 break-words text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:line-clamp-1">
              {description}
            </p>
          )}
        </div>
      </Link>
    </li>
  )
}

export default memo(TextEntry)
