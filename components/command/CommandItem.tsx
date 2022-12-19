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
    <Command.Item onSelect={onSelect}>
      {children}
      {shortcut && (
        <div cmdk-shortcuts="">
          {shortcut.split(' ').map((key) => {
            return <kbd key={key}>{key}</kbd>
          })}
        </div>
      )}
    </Command.Item>
  )
}

export default CommandItem
