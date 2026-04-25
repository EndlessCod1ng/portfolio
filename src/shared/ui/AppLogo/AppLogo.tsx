import { useTranslation } from "react-i18next";
import { AppLink } from "../AppLink/AppLink"
import { Suspense } from "react";

export const AppLogo = () => {
  const { t } = useTranslation();
  return (
    <Suspense>
      <AppLink>{t("Logo")}</AppLink>
    </Suspense>
  )
}