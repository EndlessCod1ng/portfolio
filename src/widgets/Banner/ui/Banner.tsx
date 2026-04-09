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
            {/* <h2>I'm Viacheslav</h2 */}
            <AppTitle title="I'm Viacheslav" TagName="h2" />
            <AppTitle title="Frontend Developer" TagName="h1" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia asperiores libero ut accusantium obcaecati quam aut nobis debitis sint sunt.</p>
            <div className={s.btns}>
              <AppLink to='/'>{"See projects"}</AppLink>
              <AppButton>{"See Download Resume"}</AppButton>

            </div>
          </div>
        </div>
      </AppContainer>
    

    </section>
  )
}