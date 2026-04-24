import cn from "classnames"
import s from "./AppTextarea.module.scss"
import type { TextareaHTMLAttributes } from "react"
interface AppTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {

  className?: string
}
export const AppTextarea = (
  { className, ...otherProps }: AppTextareaProps
) => {
  return (
    <textarea {...otherProps} className={cn(s.appTextarea, className)}>
    </textarea>
  )
}