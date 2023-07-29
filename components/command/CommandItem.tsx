import { Command } from 'cmdk'
import type { FC } from 'react'

interface Props {
  shortcut?: string
  onSelect?: (value: string) => void
}

const CommandItem: FC<Props> = ({
  shortcut,
  onSelect = () => {},
  children,
}) => {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex min-h-[60px] cursor-pointer items-center px-4 py-0 text-base capitalize text-[#888] outline-none aria-selected:bg-[#fafafa] aria-selected:text-[#000] dark:text-[#666] aria-selected:dark:bg-[#1a1a1a] aria-selected:dark:text-[#fafbfc] [&>svg]:mr-4 [&>svg]:flex"
    >
      {children}
      {shortcut && (
        <div cmdk-shortcuts="" className="ml-auto flex gap-2">
          {shortcut.split(' ').map((key) => {
            return (
              <kbd
                key={key}
                className="flex h-6 w-6 select-none items-center justify-center rounded-md bg-[#f5f5f5] p-0 text-sm font-normal uppercase leading-none text-[#888] dark:bg-[#222] dark:text-[#666]"
              >
                {key}
              </kbd>
            )
          })}
        </div>
      )}
    </Command.Item>
  )
}

export default CommandItem
