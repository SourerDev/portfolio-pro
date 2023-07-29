import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import {
  type ReactNode,
  type DetailedHTMLProps,
  type ComponentType,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
} from 'react'

type IconButtonProps = {
  className?: string
  Icon: ComponentType<any>
  onClick?: () => void
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function IconButton({
  Icon,
  className = '',
  ...props
}: IconButtonProps) {
  return (
    <button
      {...props}
      className={`group rounded p-1  text-gray-300 transition-all hover:bg-secondary/70 hover:text-gray-500 ${className}`}
    >
      <Icon className="h-5 w-5 stroke-2 group-hover:scale-110" />
    </button>
  )
}

export function ThemeMode() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <button
      onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      className="group hover:text-primary "
    >
      {theme == 'dark' ? (
        <SunIcon className="group-hover:stroke-2 h-6 w-6" />
      ) : (
        <MoonIcon className="group-hover:stroke-2 h-5 w-5" />
      )}
    </button>
  )
}

const Type = ['primary', 'secondary'] as const
type LinkToProps = {
  className?: string
  children: ReactNode
  type: (typeof Type)[number]
  local?: boolean
} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

export function LinkTo({
  type,
  className = '',
  children,
  local = false,
  href = '',
  ...props
}: LinkToProps) {
  const classname = `flex items-center gap-2 rounded-sm px-8 py-2 font-medium hover:scale-105
  ${
    type === 'primary'
      ? 'bg-primary text-text-dk shadow-primary hover:shadow-sm hover:shadow-primary'
      : 'bg-secondary text-text-primary hover:shadow-md dark:bg-secondary-dk'
  }
  ${className}`
  return local ? (
    <Link className={classname} href={href}>
      {children}
    </Link>
  ) : (
    <a className={classname} href={href} {...props}>
      {children}
    </a>
  )
}
