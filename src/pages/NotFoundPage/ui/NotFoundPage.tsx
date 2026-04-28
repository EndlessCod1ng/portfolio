import cn from "classnames"
import s from "./NotFoundPage.module.scss"
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle"
import { useTranslation } from "react-i18next"
import { Page } from "@/shared/layouts/Page/Page"
import { AppLink } from "@/shared/ui/AppLink/AppLink"
interface NotFoundPageProps {
  className?: string
}
const NotFoundPage = (
  { className }: NotFoundPageProps
) => {
  const { t } = useTranslation()
  return (
    <Page className={cn(s.notFoundPage, className)}>
      <AppTitle title={t("Page not found")} />
      <AppLink>{t("Home")}</AppLink>
    </Page>
  )
}
export default NotFoundPage