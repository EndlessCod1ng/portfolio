import type { ReactNode } from "react"
import { Link, type LinkProps } from "react-router"
import cn from "classnames"
import s from "./AppLink.module.scss"
import type { PathType } from "@/shared/config/routeConfig"

type AppLinkVariant = "clear" | "filled"
type AppLinkColorType = "primary" | "primaryInverted"
type AppLinkSize = "s" | "m"
type AppLinkTo = PathType 

interface AppLinkProps extends Omit<LinkProps, "to"> {
  children: ReactNode
  to?: AppLinkTo
  variant?: AppLinkVariant
  colorType?: AppLinkColorType
  size?: AppLinkSize
  className?: string
}
export const AppLink = (
  { children, to = "/", variant = "clear", colorType = "primary", size = "m", className, ...otherProps }: AppLinkProps
) => {
  return (
    <Link {...otherProps} to={to} className={cn(s.appLink, s[variant], s[colorType], s[size], className)}>
      {children}
    </Link>
  )
}