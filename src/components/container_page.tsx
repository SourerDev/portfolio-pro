import type { ReactNode } from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'

type ContainerPageProps = {
  className?: string
  children: ReactNode
  footer?: ReactNode | boolean
  header?: ReactNode | boolean
}

export function ContainerPage({
  className = '',
  children,
  header = true,
  footer = true,
}: ContainerPageProps) {
  return (
    <div className="relative h-screen w-full min-w-[320px] overflow-y-scroll bg-background dark:bg-background-dk">
      {typeof header === 'boolean' && header ? <NavBar /> : header}
      <div
        className={`mx-auto min-h-screen max-w-5xl  p-3 sm:p-4 text-text dark:text-text-dk mb-6 ${className}`}
      >
        {children}
      </div>
      {typeof footer === 'boolean' && footer ? <Footer /> : footer}
    </div>
  )
}
