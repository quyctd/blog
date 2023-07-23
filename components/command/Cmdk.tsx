import { useMemo, useEffect, useState, useRef, useCallback } from 'react'
import { Command } from 'cmdk'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'

import CMDKWrapper from '@components/command/CmdkWrapper'
import { Command as CommandIcon } from '@components/icons'
import tinykeys from '@lib/tinykeys'
import headerStyles from '@components/header/header.module.css'
import ThemeItems from './ThemeItems'
import BlogItems from './BlogItems'
import HomeItems from './HomeItems'

export default function CommandMenu() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inputValue, setInputValue] = useState('')
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const [pages, setPages] = useState<string[]>(['home'])
  const activePage = pages[pages.length - 1]
  const isHome = activePage === 'home'

  const keymap = useMemo(() => {
    return {
      t: () => {
        setPages([...pages, 'themes'])
        setOpen(true)
      },
      // Blog
      'g b': () => router.push('/blog'),
      // Navigation
      'g h': () => router.push('/'),
      'g c': () => router.push('/contact'),
      // Collections
      'g m': () => router.push('/music'),
      'g p': () => router.push('/projects'),
    }
  }, [pages, router, setOpen])

  // Register the keybinds globally
  useEffect(() => {
    const unsubs = [
      tinykeys(window, keymap, { ignoreFocus: true }),
      tinykeys(window, { '$mod+k': () => setOpen((o) => !o) }),
    ]
    return () => {
      unsubs.forEach((unsub) => unsub())
    }
  }, [keymap, setOpen])

  const popPage = useCallback(() => {
    setPages(() => {
      const x = [...pages]
      x.splice(-1, 1)
      return x
    })
  }, [pages])

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        bounce()
      }

      if (isHome || inputValue.length) {
        return
      }

      if (e.key === 'Backspace') {
        e.preventDefault()
        popPage()
        bounce()
      }
    },
    [inputValue.length, isHome, popPage]
  )

  function bounce() {
    if (ref.current) {
      ref.current.style.transform = 'scale(0.96)'
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transform = ''
        }
      }, 100)

      setInputValue('')
    }
  }

  const placeholder = useMemo(() => {
    if (activePage === 'themes') {
      return 'Select a theme...'
    } else if (activePage === 'blogs') {
      return 'Search for posts...'
    } else {
      return 'Type a command or search...'
    }
  }, [activePage])

  return (
    <>
      <button
        className={headerStyles.command}
        title="⌘K"
        onClick={() => setOpen(true)}
      >
        <CommandIcon />
      </button>

      <CMDKWrapper>
        <Command
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === 'Enter') {
              bounce()
            }

            if (isHome || inputValue.length) {
              return
            }

            if (e.key === 'Backspace') {
              e.preventDefault()
              popPage()
              bounce()
            }
          }}
        >
          <AnimatePresence>
            {open && (
              <Command.Dialog
                ref={ref}
                open={open}
                onOpenChange={setOpen}
                label="Global Command Menu"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Command.Input
                    autoFocus
                    placeholder={placeholder}
                    onValueChange={(value) => {
                      setInputValue(value)
                    }}
                    onKeyDown={onKeyDown}
                  />
                  <Command.List>
                    <Command.Empty>No results found.</Command.Empty>
                    {activePage === 'home' && (
                      <HomeItems
                        selectThemes={() => setPages([...pages, 'themes'])}
                        searchBlog={() => setPages([...pages, 'blogs'])}
                      />
                    )}
                    {activePage === 'themes' && (
                      <ThemeItems onSelect={() => setOpen(false)} />
                    )}
                    {activePage === 'blogs' && <BlogItems />}
                  </Command.List>
                </motion.div>
              </Command.Dialog>
            )}
          </AnimatePresence>
        </Command>
      </CMDKWrapper>
    </>
  )
}
