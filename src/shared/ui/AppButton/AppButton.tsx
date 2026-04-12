import type { ButtonHTMLAttributes, ReactNode } from "react"
import cn from "classnames"
import s from "./AppButton.module.scss"

type AppButtonVariant = "clear" | "filled" | "outlined"
type AppButtonColorType = "primary" | "accented"

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: AppButtonVariant
  colorType?: AppButtonColorType
  className?: string
}

export const AppButton = (
  { children, variant = "clear", colorType = "primary", className, ...otherProps }: AppButtonProps
) => {
  return (
    <button {...otherProps} className = { cn(s.appButton, s[variant], s[colorType], className
    )}>
  { children }
    </button >
  )
}