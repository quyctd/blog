import Link from '@components/link'
import { Github, Linkedin, Mail } from '@components/icons'

const socialLinkClasses =
  'inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'

const Intro = () => {
  return (
    <header>
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
        Quy Dinh
      </h1>
      <p className="mt-2 text-base leading-7 text-neutral-600 dark:text-neutral-400">
        Product engineer · Hanoi, Vietnam
      </p>

      <div className="mt-4 flex items-center gap-5">
        <Link
          external
          href="https://github.com/quyctd"
          className={socialLinkClasses}
        >
          <Github size={16} />
          GitHub
        </Link>
        <Link
          external
          href="https://www.linkedin.com/in/quyctd/"
          className={socialLinkClasses}
        >
          <Linkedin size={16} />
          LinkedIn
        </Link>
        <Link href="mailto:quy.dc98@gmail.com" className={socialLinkClasses}>
          <Mail size={16} />
          Email
        </Link>
      </div>

      <div className="mt-8 space-y-4 text-base leading-7 text-neutral-600 dark:text-neutral-400">
        <p>
          I build AI products across the stack — most recently leading the v2
          launch of an EdTech platform that drove nearly $500K in new revenue.
          On the side, I design and ship my own apps.
        </p>
        <p>
          I care deeply about details and user experience, and strongly believe
          in the power of simplicity in both design and engineering.
        </p>
      </div>
    </header>
  )
}

export default Intro
