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
    <div className="relative h-screen w-full min-w-[390px] overflow-y-scroll bg-background dark:bg-background-dk">
      {typeof header === 'boolean' && header ? <NavBar /> : header}
      <div
        className={`mx-auto min-h-screen max-w-5xl  p-6 text-text dark:text-text-dk ${className}`}
      >
        {children}
      </div>
      {typeof footer === 'boolean' && footer ? <Footer /> : footer}
    </div>
  )
}
