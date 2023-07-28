import {
  type DetailedHTMLProps,
  type TextareaHTMLAttributes,
  useRef,
  useCallback,
  useLayoutEffect,
} from 'react'

function updateTextAreaSize(textArea?: HTMLTextAreaElement) {
  if (textArea == null) return

  textArea.style.height = '0'
  textArea.style.height = `${textArea.scrollHeight}px`
}
type TextAreaAutoProps = {
  className?: string
  value: string
} & DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

export function TextAreaAuto({
  value,
  className = '',
  ...props
}: TextAreaAutoProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>()
  const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
    updateTextAreaSize(textArea)
    textAreaRef.current = textArea
  }, [])
  useLayoutEffect(() => {
    updateTextAreaSize(textAreaRef.current)
  }, [value])

  return (
    <textarea
      className={`flex-grow resize-none overflow-hidden p-4 text-lg outline-none ${className}`}
      ref={inputRef}
      value={value}
      style={{ height: 0 }}
      {...props}
    ></textarea>
  )
}
