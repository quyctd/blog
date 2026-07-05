import { FC, ReactNode } from 'react'
import clsx from 'clsx'

import Head from '@components/head'
import Header from '@components/header'
import Link from '@components/link'
import { Github, Linkedin, Mail } from '@components/icons'

interface Props {
  header?: boolean
  showHeaderTitle?: boolean
  prose?: boolean
  title?: string
  description?: string
  image?: string
  children?: ReactNode
}

const Page: FC<Props> = ({
  header = true,
  showHeaderTitle = true,
  prose = true,
  title,
  description,
  image,
  children,
}) => {
  const year = new Date().getFullYear()

  return (
    <div className="grid min-h-screen grid-rows-layout pb-16">
      <Head
        title={`${title ? `${title} | ` : ''}quyctd`}
        description={description}
        image={image}
      />
      {header && <Header title={showHeaderTitle && title} />}

      <main
        className={clsx(
          'mx-auto my-0 w-full max-w-[45rem] px-4',
          prose && 'prose prose-lg dark:prose-invert'
        )}
      >
        {children}
      </main>
      <footer className="mt-24">
        <div className="mx-auto flex max-w-[45rem] items-center justify-between border-t border-neutral-200 px-4 py-8 dark:border-neutral-800">
          <p className="text-sm text-neutral-400 dark:text-neutral-500">
            &copy; {year} Quy Dinh
          </p>
          <div className="flex items-center gap-4 text-neutral-400 dark:text-neutral-500">
            <Link
              external
              href="https://github.com/quyctd"
              aria-label="GitHub"
              className="text-neutral-400 transition-colors hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-100"
            >
              <Github size={16} />
            </Link>
            <Link
              external
              href="https://www.linkedin.com/in/quyctd/"
              aria-label="LinkedIn"
              className="text-neutral-400 transition-colors hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-100"
            >
              <Linkedin size={16} />
            </Link>
            <Link
              href="mailto:quy.dc98@gmail.com"
              aria-label="Email"
              className="text-neutral-400 transition-colors hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-100"
            >
              <Mail size={16} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Page
