import cn from "classnames"
import s from "./Banner.module.scss"
import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
interface BannerProps {
  className?: string
}
export const Banner = (
  { className }: BannerProps
) => {
  return (
    <section className={cn(s.banner, className)}>
      <div className={s.bgAccented}></div>
      <AppContainer>
        <div>Banner</div>
      </AppContainer>
    </section>
  )
}