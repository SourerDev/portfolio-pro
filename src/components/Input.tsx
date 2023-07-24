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
        className={` rounded-md bg-secondary px-4 py-2 text-text-primary outline-none placeholder:text-gray-700 ${className}`}
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
        rows={5}
        className="rounded-md bg-secondary px-4 py-2 text-text-primary outline-none placeholder:text-gray-700"
        name=""
        id="label"
        {...props}
      />
    </div>
  )
}
