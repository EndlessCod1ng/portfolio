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

      <div className={s.socials}>
        {Array(3).fill(null).map((item, i) => (<div key={i} className={s.item}>{item}</div >))}
      </div>
      <div className={s.info}>
        <AppText text={`Coded by Viacheslav Ivanov`} />

        <AppText text={`All Rights Reserved ${new Date().getFullYear()}`
        } />
      </div>

    </footer >
  )
}