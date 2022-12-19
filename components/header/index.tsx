import { memo } from 'react'
import Link from 'next/link'
import Command from '@components/command'
import CommandMenu from '@components/command/Cmdk'
import LogoIcon from '@components/icons/icon'

import styles from './header.module.css'

interface Props {
  title?: string | false | undefined
  content?: string
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <Link href="/" aria-label="Navigate Home" className={styles.logo}>
          <LogoIcon />
        </Link>

        {/* <Command /> */}
        <CommandMenu />
        {title && <div className={styles.content}>{title}</div>}
      </div>
    </nav>
  );
}

export default memo(Header)
