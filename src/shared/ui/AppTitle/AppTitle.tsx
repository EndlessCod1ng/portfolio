import cn from "classnames"
import s from "./AppTitle.module.scss"

type TagName = "h1" | "h2" | "h3" | "h4"
type AppTitleColorType = "primary" | "accented"
interface AppTitleProps {
  title: string
  TagName?: TagName
  colorType?: AppTitleColorType
  className?: string
}
export const AppTitle = (
  { title, TagName = "h3", colorType = "primary", className }: AppTitleProps
) => {
  return (
    <TagName className={cn(s.appTitle, s[colorType], className)}>
      {title}
    </TagName>
  )
}