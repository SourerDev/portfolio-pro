import type { ReactNode } from 'react'

type MainContainerProps = {
  className?: string
  children: ReactNode
  Navbar?: ReactNode
}

export function MainContainer({
  className = '',
  children,
  Navbar,
}: MainContainerProps) {
  return (
    <div className="relative h-screen w-full overflow-y-scroll min-w-[390px] bg-bg-primary dark:bg-bg-primary-dk">
      {Navbar ? Navbar : null}
      <div
        className={`mx-auto min-h-screen max-w-5xl bg-bg-primary text-text-primary dark:bg-bg-primary-dk dark:text-text-primary-dk ${className}`}
      >
        {children}
      </div>
    </div>
  )
}
