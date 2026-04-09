import cn from "classnames"
import s from "./Projects.module.scss"
import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle"
import { AppButton } from "@/shared/ui/AppButton/AppButton"
import ProjectPhoto from "@/shared/assets/images/projects/project-2.png"


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
        {["All", "React", "Vue", "ModeJs", "NextJs", "NestJs",
          // "Python"
        ].map(t => (<AppButton variant="outlined" className={s.btn} key={t}>{t}</AppButton>))}
      </div>

      <div className={s.projectsList}>
        {new Array(6).fill({ title: "Portfolio" ,imgUrl:""}).map(p => (
          <div key={p.title} className={s.project}>
            {/* <img className={s.projectImg} src={ProjectPhoto} alt={"project"} /> */}
            <div className={s.info}>
              <AppTitle TagName="h4" title={p.title} />
              <div className={s.links}>
                <AppButton>{"Live Preview"}</AppButton>
                <AppButton>{"View Code"}</AppButton>
              </div>
            </div>
          </div>
        ))}
      </div>

    </AppContainer>
  )
}