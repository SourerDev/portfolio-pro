import type { ReactNode } from 'react'

type MainContainerProps = {
  className?: string
  children: ReactNode
}

export function MainContainer({
  className = '',
  children,
}: MainContainerProps) {
  return (
    <div className="relative h-screen w-screen bg-bg-primary">
      <main className={`mx-auto min-h-screen max-w-7xl text-text-primary bg-bg-primary ${className}`}>
        {children}
      </main>
    </div>
  )
}
