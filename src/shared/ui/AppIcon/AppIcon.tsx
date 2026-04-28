import cn from "classnames"
import s from "./AppIcon.module.scss"
import type { FC, SVGProps } from "react"
import { AppLink } from "../AppLink/AppLink"

type AppIconColorType = "clear" | "accented" | "invertedBg"
type AppIconSize = "s" | "m" | "l" | "xl"
// type AppIconFunctional = "none" | "link" | "button"
type AppIconFunctional = "none" | "link"

interface AppIconProps {
  Svg: FC<SVGProps<SVGSVGElement>>
  colorType?: AppIconColorType
  size?: AppIconSize
  functional?: AppIconFunctional
  href?: string
  className?: string
}
export const AppIcon = (
  { Svg, colorType = "clear", size = "s", functional = "none", href = "", className, ...otherProps }: AppIconProps
) => {
  const content = (<Svg
    {...otherProps}
    className={cn(s.appIcon, s[colorType], s[size], s.link, className)} />)

  return (
    functional === "link" ? (
      <AppLink to={href}>
        {content}
      </AppLink>
    ) : content)
}