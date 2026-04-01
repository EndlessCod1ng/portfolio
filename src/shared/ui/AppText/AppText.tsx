import cn from "classnames"
import s from "./AppText.module.scss"
type TagName = "div" | "span" | "p"
interface AppTextProps {
  text: string
  TagName?: TagName
  className?: string
}
export const AppText = (
  { text, TagName = "div", className }: AppTextProps
) => {
  return (
    <TagName className={cn(s.appText, className)}>
      {text}
    </TagName>
  )
}