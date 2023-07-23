import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import {
  type ReactNode,
  type DetailedHTMLProps,
  type ComponentType,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
  useEffect,
} from 'react'
import Link, { type LinkProps } from 'next/link'

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

  useEffect(() => {
    setTheme('dark')
  }, [setTheme])

  return (
    <button
      onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      className=""
    >
      {theme == 'dark' ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </button>
  )
}

const Type = ['primary', 'secondary'] as const
type LinkToProps = {
  className?: string
  children: ReactNode
  type: (typeof Type)[number]
} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

export function LinkTo({
  type,
  className = '',
  children,
  ...props
}: LinkToProps) {
  return (
    <a
      className={`flex items-center gap-2 rounded-sm px-8 py-2 font-medium hover:scale-105 hover:shadow-md
      ${
        type === 'primary'
          ? 'bg-primary text-bg-primary shadow-primary'
          : 'bg-secondary text-text-primary'
      }
      ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
