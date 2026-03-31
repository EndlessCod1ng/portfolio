import cn from "classnames"
import s from "./AppContainer.module.scss"
import type { ReactNode } from "react"
interface AppContainerProps {
  children: ReactNode
  className?: string
}
export const AppContainer = (
  { children, className }: AppContainerProps
) => {
  return (
    <div className={cn(s.appContainer, className)}>
      {children}
    </div>
  )
}