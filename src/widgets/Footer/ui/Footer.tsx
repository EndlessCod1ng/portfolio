import cn from "classnames"
import s from "./Footer.module.scss"
import { AppText } from "@/shared/ui/AppText/AppText"


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

        <AppText text={t("Coded by Viacheslav")} />

        <AppText text={`${t("All Rights Reserved")} ${new Date().getFullYear()}`
        } />
  
    </footer >
  )
}