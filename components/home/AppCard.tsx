import { FC } from 'react'
import Link from '@components/link'
import { ArrowUpRight } from '@components/icons'
import type { Project, ProjectStatus } from '@data/projects'

const statusStyles: Record<ProjectStatus, { label: string; classes: string }> =
  {
    live: {
      label: 'App Store',
      classes:
        'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400',
    },
    soon: {
      label: 'Coming soon',
      classes: 'bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-400',
    },
    building: {
      label: 'In progress',
      classes:
        'bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400',
    },
  }

const linkClasses =
  'inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'

const AppCard: FC<{ project: Project }> = ({ project }) => {
  const status = statusStyles[project.status]
  const isPlaceholder = project.status === 'building'

  return (
    <div
      className={
        isPlaceholder
          ? 'flex items-start gap-4 rounded-xl border border-dashed border-neutral-200 p-5 dark:border-neutral-800'
          : 'flex items-start gap-4 rounded-xl border border-neutral-200 p-5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700'
      }
    >
      {project.icon ? (
        <img
          src={project.icon}
          alt={`${project.name} app icon`}
          width={48}
          height={48}
          className="mt-0.5 h-12 w-12 shrink-0 rounded-[10px]"
        />
      ) : (
        <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-neutral-100 text-lg text-neutral-400 dark:bg-neutral-800 dark:text-neutral-500">
          ?
        </div>
      )}

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
            {project.name}
          </h3>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${status.classes}`}
          >
            {status.label}
          </span>
        </div>
        <p className="mt-1 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
          {project.tagline}
        </p>
        {(project.site || project.appStore) && (
          <div className="mt-2.5 flex gap-4 text-sm">
            {project.site && (
              <Link external href={project.site} className={linkClasses}>
                Website <ArrowUpRight size={14} />
              </Link>
            )}
            {project.appStore && (
              <Link external href={project.appStore} className={linkClasses}>
                App Store <ArrowUpRight size={14} />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default AppCard
