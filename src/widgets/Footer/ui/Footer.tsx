import cn from "classnames"
import s from "./Footer.module.scss"
import { AppText } from "@/shared/ui/AppText/AppText"

import Instagram from "@/shared/assets/images/footer/instagram.svg?react"
import Whatsapp from "@/shared/assets/images/footer/whatsapp.svg?react"
import Telegram from "@/shared/assets/images/footer/telegram.svg?react"
import { AppIcon } from "@/shared/ui/AppIcon/AppIcon"
import { useTranslation } from "react-i18next"

interface FooterProps {
  className?: string
}
export const Footer = (
  { className }: FooterProps
) => {
  const { t } = useTranslation();
  return (
    <footer className={cn(s.footer, className)}>
      {/* <div className={s["wave-box"]}></div> */}

      <div className={s.footerSocials}>
        {[Instagram, Whatsapp, Telegram].map((item, i) => (< AppIcon Svg={item} key={i} className={s.item} size="m"
          functional="link"
          href="/"
        />))}
      </div>


      <div className={s.info}>
        <AppText text={t("Coded by Viacheslav")} />

        <AppText text={`${t("All Rights Reserved")} ${new Date().getFullYear()}`
        } />
      </div>

    </footer >
  )
}