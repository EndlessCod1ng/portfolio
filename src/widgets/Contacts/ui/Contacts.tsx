import cn from "classnames"
import s from "./Contacts.module.scss"
import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle"
import { AppInput } from "@/shared/ui/AppInput/AppInput"
import { AppButton } from "@/shared/ui/AppButton/AppButton"
interface ContactsProps {
  className?: string
}
export const Contacts = (
  { className }: ContactsProps
) => {
  return (
    <section className={cn(s.contacts, className)}>
      <AppContainer>
        <AppTitle className={s.title} title={"Contacts"} />
        <div className={s.content}>
          <AppTitle TagName="h4" title={"Get in touch"} />
          <div className={s.topLine}>
            <AppInput placeholder="E-mail" />
            <AppInput placeholder="Phone" />
          </div>
          <AppInput placeholder="Message" />
          <AppButton className={s.btn} variant="filled">{"Send"}</AppButton>
        </div>

      </AppContainer>
    </section>
  )
}