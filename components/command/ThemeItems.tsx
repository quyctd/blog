import { useTheme } from 'next-themes'
import CommandItem from './CommandItem'

import type { FC } from 'react'

interface Props {
  onSelect?: () => void
}

const ThemeItems: FC<Props> = ({ onSelect }) => {
 const { themes, setTheme } = useTheme()

  return themes.map((theme: string) => (
    <CommandItem
      key={`theme-${theme}`}
      onSelect={() => {
        setTheme(theme);
        onSelect?.();
      }
    }
    >
      <span style={{ textTransform: 'capitalize' }}>{theme}</span>
    </CommandItem>
  ))
}

export default ThemeItems
