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
    <div className="relative h-screen w-full bg-bg-primary overflow-y-scroll">
      {Navbar ? Navbar : null}
      <div
        className={`mx-auto min-h-screen max-w-7xl bg-bg-primary text-text-primary ${className}`}
      >
        {children}
      </div>
    </div>
  )
}
