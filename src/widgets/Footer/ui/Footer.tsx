import cn from "classnames"
import s from "./Footer.module.scss"
import { AppText } from "@/shared/ui/AppText/AppText"

interface FooterProps {
  className?: string
}
export const Footer = (
  { className }: FooterProps
) => {
  return (
    <footer className={cn(s.footer, className)}>
      {/* <div className={s["wave-box"]}></div> */}

      <AppText text={`Coded by Viacheslav Ivanov`} />

      <AppText text={`All Rights Reserved ${new Date().getFullYear()}`
      } />

    </footer >
  )
}