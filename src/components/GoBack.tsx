import type { ReactNode } from 'react'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/24/outline'

type GoBackProps = {
  home?: boolean
  children?: ReactNode
}

export function GoBack({ children, home = false }: GoBackProps) {
  return (
    <Link
      href={home ? '/' : '..'}
      className="flex h-9 w-9 items-center justify-center  rounded-full pl-1 py-2 pr-2 hover:bg-bg-secondary hover:shadow"
    >
      {children || <XMarkIcon className="h-full w-full" />}
    </Link>
  )
}
