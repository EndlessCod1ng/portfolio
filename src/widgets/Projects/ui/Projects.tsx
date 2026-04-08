import cn from "classnames"
import s from "./Projects.module.scss"
import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle"
import { AppButton } from "@/shared/ui/AppButton/AppButton"
interface ProjectsProps {
  className?: string
}
export const Projects = (
  { className }: ProjectsProps
) => {
  return (
    <AppContainer className={cn(s.projects, className)}>
      <AppTitle title={"Projects"} className={s.title} />

      <div className={s.btns}>
        {["All", "React", "Vue", "ModeJs", "NextJs", "NestJs", "Python"].map(t => (<AppButton key={t}>{t}</AppButton>))}
      </div>

      <div className={s.projects}>
        {[{ title: "Portfolio" ,imgUrl:""}].map(p => (
          <div key={p.title} className={s.project}>
            <AppTitle TagName="h4" title={p.title} />
          </div>
        ))}
      </div>
    </AppContainer>
  )
}