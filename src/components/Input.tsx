import type {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react'

type MainInputProps = {
  className?: string
  label: string
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export function MainInput({ label, className = '', ...props }: MainInputProps) {
  return (
    <div className="flex w-full flex-col gap-y-2">
      <label className="text-lg font-medium" htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        type="text"
        className={` rounded-md px-4 py-2 outline-none bg-secondary placeholder:text-gray-700 text-text-primary ${className}`}
        {...props}
      />
    </div>
  )
}

type MainTextAreaProps = {
  className?: string
  label: string
} & DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

export function MainTextArea({ label, ...props }: MainTextAreaProps) {
  return (
    <div className="flex w-full flex-col gap-y-2">
      <label className="text-lg font-medium" htmlFor={label}>
        {label}
      </label>
      <textarea
        className="rounded-md px-4 py-2 outline-none bg-secondary placeholder:text-gray-700 text-text-primary"
        name=""
        id="label"
        {...props}
      />
    </div>
  )
}
