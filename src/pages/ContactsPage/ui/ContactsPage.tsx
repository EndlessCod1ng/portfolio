import cn from "classnames"
import s from "./ContactsPage.module.scss"
import { Page } from "@/shared/layouts/Page/Page"
import { Contacts } from "@/widgets/Contacts"
interface ContactsPageProps {
  className?: string
}
const ContactsPage = (
  { className }: ContactsPageProps
) => {
  return (
    <Page className={cn(s.contactsPage, className)}>
      <Contacts />
    </Page>
  )
}
export default ContactsPage