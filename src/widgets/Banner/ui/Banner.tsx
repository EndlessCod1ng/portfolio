import cn from "classnames"
import s from "./Banner.module.scss"
import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
import { AppLink } from "@/shared/ui/AppLink/AppLink"
import { AppButton } from "@/shared/ui/AppButton/AppButton"
import Ae from "@/shared/assets/images/banner/ae.png"
import Ai from "@/shared/assets/images/banner/ai.png"
import F from "@/shared/assets/images/banner/f.png"
import Ps from "@/shared/assets/images/banner/ps.png"
interface BannerProps {
  className?: string
}

const images = [
  { text: "Photoshop", img: Ps },
  { text: "After Effects", img: Ae },
  { text: "Illustrator", img: Ai },
  { text: "Figma", img: F }
]
export const Banner = (
  { className }: BannerProps
) => {
  return (
    <section className={cn(s.banner, className)}>
      <div className={s.bgAccented}></div>
      <AppContainer className={s.container}>
        <div className={s.content}>
          <div className={s.img}></div>
          <div className={s.info}>
            <h2>123</h2>
            <h1>456</h1>
            <p>789</p>
            <div className={s.btns}>
              <AppLink to='/'>{"See projects"}</AppLink>
              <AppButton>{"See Download Resume"}</AppButton>
            </div>
          </div>
        </div>
        <div className={s.icons}>

          {images.map((image, i) => (<div key={i} className={s.imageWrapper}>
            {image.text}
            <img className={s.image} src={image.img} />
          </div>))}
        </div>
      </AppContainer>
    </section>
  )
}