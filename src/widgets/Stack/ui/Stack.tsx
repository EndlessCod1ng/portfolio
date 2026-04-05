import cn from "classnames"
import s from "./Stack.module.scss"

import Ae from "@/shared/assets/images/banner/ae.png"
import Ai from "@/shared/assets/images/banner/ai.png"
import F from "@/shared/assets/images/banner/f.png"
import Ps from "@/shared/assets/images/banner/ps.png"
import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle"
interface StackProps {
  className?: string
}
const images = [
  { text: "Photoshop", img: Ps },
  { text: "After Effects", img: Ae },
  { text: "Illustrator", img: Ai },
  { text: "Figma", img: F }
]
export const Stack = (
  { className }: StackProps
) => {
  return (
    <AppContainer className={cn(s.stack, className)}>
      <AppTitle title={"Stack"} className={s.title} />
      <div className={s.icons}>
        {images.map((image, i) => (<div key={i} className={s.iconWrapper}>
          {image.text}
          <img className={s.icon} src={image.img} />
        </div>))}
      </div>
    </AppContainer>
  )
}