import cn from "classnames"
import s from "./Contacts.module.scss"
import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle"
interface ContactsProps {
  className?: string
}
export const Contacts = (
  { className }: ContactsProps
) => {
  return (
    <div className={cn(s.contacts, className)}>
      <AppContainer className={s.content}>
        <AppTitle className={s.title} title={"Contacts"} />
        <AppTitle TagName="h4" title={"Get in touch"} />

      </AppContainer>
    </div>
  )
}