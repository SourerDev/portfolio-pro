import type { ReactNode } from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'

type MainContainerProps = {
  className?: string
  children: ReactNode
  footer?: ReactNode | boolean
  header?: ReactNode | boolean
}

export function MainContainer({
  className = '',
  children,
  header = true,
  footer = true,
}: MainContainerProps) {
  return (
    <div className="relative h-screen w-full min-w-[390px] overflow-y-scroll bg-bg-primary dark:bg-bg-primary-dk">
      {typeof header === 'boolean' && header ? <NavBar /> : header}
      <div
        className={`mx-auto min-h-screen max-w-5xl bg-bg-primary p-6 text-text-primary dark:bg-bg-primary-dk dark:text-text-primary-dk ${className}`}
      >
        {children}
      </div>
      {typeof footer === 'boolean' && footer ? <Footer /> : footer}
    </div>
  )
}
