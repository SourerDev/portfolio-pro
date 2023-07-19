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
