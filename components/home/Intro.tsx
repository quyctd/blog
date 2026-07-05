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
      <p className="mt-2 text-neutral-500 dark:text-neutral-400">
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

      <div className="mt-8 space-y-4 text-[1.0625rem] leading-relaxed text-neutral-700 dark:text-neutral-300">
        <p>
          Two years into building an AI product that&apos;s grown to $500K in
          revenue — working across the stack. On the side, I design and ship my
          own apps.
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
