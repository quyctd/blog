import { memo, FC } from 'react'
import Link from 'next/link'
import CommandMenu from '@components/command/Cmdk'
import LogoIcon from '@components/icons/icon'

interface Props {
  title?: string | false
  content?: string
}

const Header: FC<Props> = ({ title }) => {
  return (
    <nav className="sticky top-0 z-10 my-8 bg-white bg-opacity-80 py-4 backdrop-blur-[20px] backdrop-saturate-[1.8] dark:bg-[#131415] dark:bg-opacity-[0.45] lg:my-16">
      <div className="mx-auto my-0 flex h-8 max-w-[45rem] items-center px-4">
        <Link
          href="/"
          aria-label="Navigate Home"
          className="-m-[10px] mr-2 inline-flex rounded-lg p-[10px] hover:bg-neutral-100 hover:outline-none focus:bg-neutral-100 focus:outline-none dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        >
          <LogoIcon />
        </Link>
        <CommandMenu />
        {title && (
          <div className="ml-8 overflow-auto font-medium text-neutral-400 dark:text-neutral-500">
            {title}
          </div>
        )}
      </div>
    </nav>
  )
}

export default memo(Header)
