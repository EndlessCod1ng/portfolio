import cn from "classnames"
import s from "./AppIcon.module.scss"
import type { FC, SVGProps } from "react"
type AppIconColorType = "clear" | "accented" | "invertedBg"
interface AppIconProps {
  Svg: FC<SVGProps<SVGSVGElement>>
  colorType?: AppIconColorType
  className?: string
}
export const AppIcon = (
  { Svg, colorType = "accented", className, ...otherProps }: AppIconProps
) => {
  return (
    <Svg
      {...otherProps}
      className={cn(s.appIcon, s[colorType], className)} />
  )
}