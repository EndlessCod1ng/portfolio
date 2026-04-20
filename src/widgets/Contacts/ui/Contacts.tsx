import cn from "classnames"
import s from "./Contacts.module.scss"
import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle"
import { AppInput } from "@/shared/ui/AppInput/AppInput"
import { AppButton } from "@/shared/ui/AppButton/AppButton"
import { AppText } from "@/shared/ui/AppText/AppText"
interface ContactsProps {
  className?: string
}
export const Contacts = (
  { className }: ContactsProps
) => {
  return (
    <section className={cn(s.contacts, className)}>
      <AppTitle className={s.title} title={"Contacts"} />
      <AppContainer className={s.container}>
        <form className={s.form}>
          <AppTitle TagName="h4" title={"Get in touch"} />
          <div className={s.topLine}>
            <AppInput placeholder="E-mail" />
            <AppInput placeholder="Phone" />
          </div>
          <AppInput placeholder="Message " />
          <AppButton className={s.btn} variant="filled">{"Send"}</AppButton>
        </form>

        <div className={s.info}>
          {
            [
              { icon: "", title: "Location", text: "USA/Sacramento" },
              { icon: "", title: "Phone", text: "+989150063913" },
              { icon: "", title: "Email", text: "endlesscoding@yahoo.com" },

            ].map(infoItem => (<div key={infoItem.title} className={s.item}>
              <div className={s.icon}>{infoItem.icon}</div>
              <div className={s.text}>
                <AppTitle TagName="h4" title={infoItem.title} />
                <AppText text={infoItem.text} />
              </div>
            </div>))
          }

        </div>

      </AppContainer>
    </section>
  )
}