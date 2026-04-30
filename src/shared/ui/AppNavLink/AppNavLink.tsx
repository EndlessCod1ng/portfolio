import type { ReactNode } from "react"
import { NavLink, type NavLinkProps } from "react-router"
import cn from "classnames"
import s from "./AppNavLink.module.scss"
import type { PathType } from "@/shared/config/routeConfig"


type AppNavLinkTo = PathType

interface AppNavLinkProps extends Omit<NavLinkProps, "to"> {
  children: ReactNode
  to?: AppNavLinkTo
  className?: string
}
export const AppNavLink = (
  { children, to = "/", className, ...otherProps }: AppNavLinkProps
) => {
  return (
    <NavLink {...otherProps} to={to} className={({ isActive }) => cn(s.appLink, { [s.active]: isActive }, className)}>
      {children}
    </NavLink>
  )
}