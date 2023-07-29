import { useRouter } from 'next/router'
import { Command } from 'cmdk'
import CommandItem from './CommandItem'
import {
  Sparkles,
  Pencil,
  Search,
  Music,
  Document,
  ArrowRight,
  Github,
} from '@components/icons'

import type { FC } from 'react'

interface Props {
  selectThemes: Function
  searchBlog: Function
}

// classNames="
const groupClasses =
  '[&>[cmdk-group-heading]]:flex [&>[cmdk-group-heading]]:items-center [&>[cmdk-group-heading]]:min-h-[5px] [&>[cmdk-group-heading]]:py-1 [&>[cmdk-group-heading]]:px-[20px] [&>[cmdk-group-heading]]:text-sm [&>[cmdk-group-heading]]:bg-[#f5f5f5] [&>[cmdk-group-heading]]:dark:bg-[#222] [&>[cmdk-group-heading]]:text-[#888] [&>[cmdk-group-heading]]:dark:text-[#666]'
// "

const HomeItems: FC<Props> = ({ selectThemes, searchBlog }) => {
  const router = useRouter()

  return (
    <>
      <CommandItem shortcut="T" onSelect={() => selectThemes()}>
        <Sparkles />
        Themes
      </CommandItem>
      <Command.Group heading="Blog" className={groupClasses}>
        <CommandItem shortcut="G B" onSelect={() => router.push('/blog')}>
          <Pencil />
          Blog
        </CommandItem>
        <CommandItem onSelect={() => searchBlog()}>
          <Search />
          Search blog...
        </CommandItem>
      </Command.Group>
      <Command.Group heading="Collection" className={groupClasses}>
        <CommandItem shortcut="g m" onSelect={() => router.push('/music')}>
          <Music />
          Music
        </CommandItem>
        <CommandItem shortcut="g p" onSelect={() => router.push('/projects')}>
          <Document />
          Projects
        </CommandItem>
      </Command.Group>
      <Command.Group heading="Navigation" className={groupClasses}>
        <CommandItem shortcut="g h" onSelect={() => router.push('/home')}>
          <ArrowRight />
          Home
        </CommandItem>
        <CommandItem shortcut="g c" onSelect={() => router.push('/contact')}>
          <ArrowRight />
          Contact
        </CommandItem>
      </Command.Group>
      <Command.Group heading="Social" className={groupClasses}>
        <CommandItem
          onSelect={() => window.open('https://github.com/quyctd', '_blank')}
        >
          <Github />
          Github
        </CommandItem>
      </Command.Group>
    </>
  )
}

export default HomeItems
