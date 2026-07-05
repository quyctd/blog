import { FC, ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface Props {
  id?: string
  title?: string
  children: ReactNode
}

const Section: FC<Props> = ({ id, title, children }) => {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      id={id}
      initial={
        reduceMotion
          ? { opacity: 1, transform: 'translateY(0px)' }
          : { opacity: 0, transform: 'translateY(12px)' }
      }
      whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      className="mt-20 scroll-mt-28"
    >
      {title && (
        <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500">
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  )
}

export default Section
