import type { ReactNode } from "react"
import { Link, type LinkProps, type To } from "react-router"
import cn from "classnames"
import s from "./AppLink.module.scss"

type AppLinkVariant = "clear"
type AppLinkColorType = "primary" | "primaryInverted"

interface AppLinkProps extends Omit<LinkProps, "to"> {
  children: ReactNode
  to?: To
  variant?: AppLinkVariant
  colorType?: AppLinkColorType
  className?: string
}
export const AppLink = (
  { children, to = "/", variant = "clear", colorType = "primary", className, ...otherProps }: AppLinkProps
) => {
  return (
    <Link {...otherProps} to={to} className={cn(s.appLink, s[variant], s[colorType], className)}>
      {children}
    </Link>
  )
}