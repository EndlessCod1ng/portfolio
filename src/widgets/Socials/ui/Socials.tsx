
import Instagram from "@/shared/assets/images/socials/instagram.svg?react"
import Whatsapp from "@/shared/assets/images/socials/whatsapp.svg?react"
import Telegram from "@/shared/assets/images/socials/telegram.svg?react"

import cn from "classnames"
import s from "./Socials.module.scss"
import { AppIcon } from "@/shared/ui/AppIcon/AppIcon"
interface SocialsProps {
  className?: string
}
export const Socials = (
  { className }: SocialsProps
) => {
  return (
    <div className={cn(s.socials, className)}>

      {[Instagram, Whatsapp, Telegram].map((item, i) => (<AppIcon key={i} className={s.item} Svg={item}
        functional="link"
        href="/"
        size="m" />))}
    </div>
  )
}