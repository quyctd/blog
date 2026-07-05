import { FC } from 'react'
import Link from '@components/link'
import { ArrowUpRight } from '@components/icons'
import type { Role } from '@data/experience'

const mutedLinkClasses =
  'inline-flex items-center gap-1 text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'

const ExperienceList: FC<{ roles: Role[] }> = ({ roles }) => {
  return (
    <div>
      <ol>
        {roles.map((role) => (
          <li
            key={`${role.company}-${role.period}`}
            className="grid gap-y-1 border-t border-neutral-100 py-5 first:border-t-0 first:pt-0 last:pb-0 dark:border-neutral-800/60 sm:grid-cols-[10rem_1fr] sm:gap-x-8"
          >
            <p className="text-sm leading-6 tabular-nums text-neutral-400 dark:text-neutral-500">
              {role.period}
            </p>
            <div>
              <p className="font-medium text-neutral-900 dark:text-neutral-100">
                {role.title}
                <span className="font-normal text-neutral-400 dark:text-neutral-500">
                  {' '}
                  ·{' '}
                </span>
                {role.url ? (
                  <Link
                    external
                    href={role.url}
                    className="font-normal text-neutral-500 underline-offset-4 transition-colors hover:text-neutral-900 hover:underline dark:text-neutral-400 dark:hover:text-neutral-100"
                  >
                    {role.company}
                  </Link>
                ) : (
                  <span className="font-normal text-neutral-500 dark:text-neutral-400">
                    {role.company}
                  </span>
                )}
              </p>
              <p className="mt-1.5 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                {role.summary}
              </p>
              {role.projects && role.projects.length > 0 && (
                <div className="mt-2.5 flex flex-wrap gap-4 text-sm">
                  {role.projects.map((project) => (
                    <Link
                      key={project.name}
                      external
                      href={project.url}
                      className={mutedLinkClasses}
                    >
                      {project.name} <ArrowUpRight size={14} />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-8 text-sm">
        <Link
          external
          href="/resume.pdf"
          className="text-neutral-500 underline-offset-4 hover:text-neutral-900 hover:underline dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          Full resume →
        </Link>
      </p>
    </div>
  )
}

export default ExperienceList
