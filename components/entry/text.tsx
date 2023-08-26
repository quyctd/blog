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
    <li className="list-none">
      <Link
        href={href}
        as={as}
        external={!as}
        title={`${title} (${description})`}
        className="group block border-t border-solid border-[#f5f5f5] pb-12 pt-4 text-[#000] no-underline outline-none dark:border-[#222] dark:text-[#fafbfc] sm:flex sm:items-start"
      >
        <div className="mr-4 basis-20 whitespace-nowrap text-base leading-[30px] text-[#888] dark:text-[#666]">
          {type}
        </div>
        <div className="flex-1">
          <p className="m-0 line-clamp-2 break-words text-2xl font-bold leading-[1.3] transition-colors group-hover:text-[#888] dark:group-hover:text-[#666] sm:line-clamp-1">
            {title}
          </p>
          {description && (
            <p className="mx-0 mb-0 mt-2 line-clamp-2 break-words leading-[1.3] text-[#888] dark:text-[#666] sm:line-clamp-1">
              {description}
            </p>
          )}
        </div>
      </Link>
    </li>
  )
}

export default memo(TextEntry)
