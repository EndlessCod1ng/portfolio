import cn from "classnames"
import s from "./AppTitle.module.scss"
type TagName = "h1" | "h2" | "h3" | "h4"
interface AppTitleProps {
  title: string
  TagName?: TagName
  className?: string
}
export const AppTitle = (
  { title, TagName = "h3", className }: AppTitleProps
) => {
  return (
    <TagName className={cn(s.appTitle, className)}>
      {title}
    </TagName>
  )
}