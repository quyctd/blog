import { useRouter } from 'next/router'
import { Command } from 'cmdk'
import CommandItem from './CommandItem'
import {
    Sparkles,
    Pencil,
    Search,
    Book,
    Music,
    Document,
    ArrowRight,
    Github,
    Gists,
  } from '@components/icons'

import type { FC } from 'react'

interface Props {
selectThemes: Function
searchBlog: Function
}

const HomeItems: FC<Props> = ({ selectThemes, searchBlog }) => {
  const router = useRouter()

  return (
    <>
      <CommandItem
        shortcut="T"
        onSelect={() => selectThemes()}
      >
        <Sparkles />
        Themes
      </CommandItem>
      <Command.Group heading="Blog">
        <CommandItem shortcut="G B" onSelect={() => router.push('/blog')}>
        <Pencil />
          Blog
        </CommandItem>
        <CommandItem onSelect={() => searchBlog()}>
          <Search />
          Search blog...
        </CommandItem>
      </Command.Group>
      <Command.Group heading="Collection">
        <CommandItem shortcut="g r" onSelect={() => router.push('/reading')}>
          <Book />
          Reading
        </CommandItem>
        <CommandItem shortcut="g i" onSelect={() => router.push('/gists')}>
          <Gists />
          Gists
        </CommandItem>
        <CommandItem shortcut="g m" onSelect={() => router.push('/music')}>
          <Music />
          Music
        </CommandItem>
        <CommandItem shortcut="g p" onSelect={() => router.push('/projects')}>
          <Document />
          Projects
        </CommandItem>
      </Command.Group>
      <Command.Group heading="Navigation">
        <CommandItem shortcut="g h" onSelect={() => router.push('/home')}>
          <ArrowRight />
          Home
        </CommandItem>
        <CommandItem shortcut="g c" onSelect={() => router.push('/contact')}>
          <ArrowRight />
          Contact
        </CommandItem>
      </Command.Group>
      <Command.Group heading="Social">
        <CommandItem onSelect={() => window.open('https://github.com/quyctd', '_blank')}>
          <Github />
          Github
        </CommandItem>
      </Command.Group>
    </>
  )
}

export default HomeItems
