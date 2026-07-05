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
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="mt-20 scroll-mt-28"
    >
      {title && (
        <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500">
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  )
}

export default Section
