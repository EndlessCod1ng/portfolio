import cn from "classnames"
import s from "./Banner.module.scss"
import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
import { AppLink } from "@/shared/ui/AppLink/AppLink"
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle"

import Photo from "@/shared/assets/images/banner/photo.jpg"
import { AppText } from "@/shared/ui/AppText/AppText"
import { useTranslation } from "react-i18next"
import { PATHS } from "@/shared/config/routeConfig"


interface BannerProps {
  className?: string
}

export const Banner = (
  { className }: BannerProps
) => {
  const { t } = useTranslation();

  return (
    <section className={cn(s.banner, className)}>
      <div className={s.bannerBg}></div>

      <AppContainer >
        <div className={s.content}>
          <div className={s.bgContent}></div>
          <div className={s.cross}></div>
          <div className={s.circle}></div>

          <div className={s.imgWrapper}>
            <img className={s.img} src={Photo} alt="photo" />
          </div>

          <div className={s.info}>
            <div className={s.name}>
              <AppTitle title={t("Hi, I'm")} TagName="h2" />
              <AppTitle title={t("Viacheslav")} TagName="h2" colorType="accented" />
            </div>
            <div className={s.prof}>
              <AppTitle title={
                `Frontend`
              } TagName="h1" />
              <AppTitle title={
                `${t("Developer")}`
              } TagName="h1" />
            </div>
            <AppText TagName="p" text={t("I offer frontend/backend website and application development services of any complexity.")} />
            <div className={s.btns}>
              <AppLink size="m" variant="filled" to={PATHS.PROJECTS}>{t("See projects")}</AppLink>

              <AppLink size="m" to={PATHS.PROJECTS} >{t("See Resume")}</AppLink>

            </div>
          </div>
        </div>
      </AppContainer>


    </section>
  )
}