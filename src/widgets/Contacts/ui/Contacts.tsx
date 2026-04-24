import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle"
import { AppInput } from "@/shared/ui/AppInput/AppInput"
import { AppButton } from "@/shared/ui/AppButton/AppButton"
import { AppText } from "@/shared/ui/AppText/AppText"
import { AppIcon } from "@/shared/ui/AppIcon/AppIcon"

import Location from "@/shared/assets/images/contacts/location.svg?react"
import Phone from "@/shared/assets/images/contacts/phone.svg?react"
import Email from "@/shared/assets/images/contacts/email.svg?react"

import cn from "classnames"
import s from "./Contacts.module.scss"
import { AppTextarea } from "@/shared/ui/AppTextarea/AppTextarea"

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
          <AppTextarea placeholder="Message " />
          <AppButton className={s.btn} variant="filled">{"Send"}</AppButton>
        </form>

        <div className={s.info}>
          {
            [
              { icon: Location, title: "Location", text: "USA/Sacramento" },
              { icon: Phone, title: "Phone", text: "+989150063913" },
              { icon: Email, title: "Email", text: "endlesscoding@yahoo.com" },

            ].map(infoItem => (<div key={infoItem.title} className={s.item}>
              <AppIcon Svg={infoItem.icon} size="l"
                colorType="accented"

              />
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