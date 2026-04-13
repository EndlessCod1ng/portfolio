import cn from "classnames"
import s from "./Banner.module.scss"
import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
import { AppLink } from "@/shared/ui/AppLink/AppLink"
import { AppButton } from "@/shared/ui/AppButton/AppButton"
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle"

import Photo from "@/shared/assets/images/banner/photo.jpg"


interface BannerProps {
  className?: string
}

export const Banner = (
  { className }: BannerProps
) => {
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
              <AppTitle title="I'm" TagName="h2" />
              <AppTitle title="Viacheslav" TagName="h2" colorType="accented" />
            </div>
            <AppTitle title="Frontend Developer" TagName="h1" />
            <div className={s.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia asperiores libero ut accusantium obcaecati quam aut nobis debitis sint sunt.</div>
            <div className={s.btns}>
              <AppLink variant="filled" to='/'>{"See projects"}</AppLink>

              <AppButton>{"See Download Resume"}</AppButton>

            </div>
          </div>
        </div>
      </AppContainer>


    </section>
  )
}