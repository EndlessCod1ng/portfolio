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
import { useTranslation } from "react-i18next"

interface ContactsProps {
  className?: string
}
export const Contacts = (
  { className }: ContactsProps
) => {
  const { t } = useTranslation();
  return (
    <section className={cn(s.contacts, className)}>
      <AppTitle className={s.title} title={t("Contacts")} />
      <AppContainer className={s.container}>
        <form className={s.form}>
          <AppTitle TagName="h4" title={t("Contact me")} />
          <div className={s.topLine}>
            <AppInput placeholder={t("E-mail")} />
            <AppInput placeholder={t("Phone")} />
          </div>
          <AppTextarea placeholder={t("Message")} />
          <AppButton className={s.btn} variant="filled">{t("Send")}</AppButton>
        </form>

        <div className={s.info}>
          {
            [
              { icon: Location, title: t("Location"), text: t("USA/Sacramento") },
              { icon: Phone, title: t("Phone"), text: "+989150063913" },
              { icon: Email, title: t("Email"), text: "endlesscoding@yahoo.com" },

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