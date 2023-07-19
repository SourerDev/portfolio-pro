import { useTheme } from 'next-themes'
import { type ComponentType } from 'react'

type IconButtonProps = {
  className?: string
  Icon: ComponentType<any>
  onClick?: () => void
}

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
      className="absolute bottom-32 rounded-lg bg-gray-800 px-8 py-2 text-2xl text-white transition-all duration-100 hover:bg-gray-600 dark:bg-gray-50 dark:text-gray-800 dark:hover:bg-gray-300 md:text-4xl"
    >
      Toggle Mode
    </button>
  )
}
