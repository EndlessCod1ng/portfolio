import cn from "classnames"
import s from "./AppInput.module.scss"
import type { InputHTMLAttributes } from "react"

interface AppInputProps extends InputHTMLAttributes<HTMLInputElement> {
 
  className?: string
}
export const AppInput = (
  { className, ...otherProps }: AppInputProps
) => {
  return (
    <input
      {...otherProps}
      className={cn(s.appInput, className)}
    />
  )
}