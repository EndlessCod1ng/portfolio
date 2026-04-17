import cn from "classnames"
import s from "./Footer.module.scss"
import { AppText } from "@/shared/ui/AppText/AppText"
import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
interface FooterProps {
  className?: string
}
export const Footer = (
  { className }: FooterProps
) => {
  return (
    <footer className={cn(s.footer, className)}>
      {/* <div className={s["wave-box"]}></div> */}
      <AppContainer >
        <AppText text={`Coded by Viacheslav Ivanov`} />

        <AppText text={`All Rights Reserved ${new Date().getFullYear()}`
        } />
      </AppContainer>
    </footer >
  )
}