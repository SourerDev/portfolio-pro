import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/24/outline'

type GoBackProps = {
  home?: boolean
}

export function GoBack({ home = false }: GoBackProps) {
  return <Link href={home ? '/' : '..'}>
    <XMarkIcon className='w-8 h-8'/>
  </Link>
}
