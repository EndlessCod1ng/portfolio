import cn from "classnames"
import s from "./Page.module.scss"
import type { ReactNode } from "react"
interface PageProps {
  children: ReactNode
  className?: string
}
export const Page = (
  { children, className }: PageProps
) => {
  return (
    <div className={cn(s.page, className)}>
      {children}
    </div>
  )
}