import { FC } from 'react'
import Link from '@components/link'
import type { Role } from '@data/experience'

const ExperienceList: FC<{ roles: Role[] }> = ({ roles }) => {
  return (
    <div>
      <ol className="space-y-6">
        {roles.map((role) => (
          <li key={`${role.company}-${role.period}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <p className="font-medium text-neutral-900 dark:text-neutral-100">
                {role.title}{' '}
                <span className="font-normal text-neutral-500 dark:text-neutral-400">
                  · {role.company}
                </span>
              </p>
              <p className="text-sm tabular-nums text-neutral-400 dark:text-neutral-500">
                {role.period}
              </p>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {role.summary}
            </p>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm">
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
