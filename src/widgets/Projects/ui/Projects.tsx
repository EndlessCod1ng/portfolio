import cn from "classnames"
import s from "./Projects.module.scss"
import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle"
import { AppButton } from "@/shared/ui/AppButton/AppButton"
import { AppLink } from "@/shared/ui/AppLink/AppLink"

// import ProjectPhoto from "@/shared/assets/images/projects/project-2.png"


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
        ].map(t => (<AppButton variant="outlined" key={t}>{t}</AppButton>))}
      </div>

      <div className={s.projectsList}>

        {new Array(6).fill({ title: "Portfolio", imgUrl: "" }).map((p, i) => (
          <div key={p.title + i} className={s.project}>
            {/* <img className={s.projectImg} src={ProjectPhoto} alt={"project"} /> */}
            <div className={s.info}>
              <AppTitle TagName="h4" title={p.title} />
              <div className={s.links}>
                <AppLink size="s" to='/' variant="filled">{"Live Preview"}</AppLink>
                <AppLink to='/'>{"View Code"}</AppLink>
              </div>
            </div>
          </div>
        ))}

      </div>
      <AppLink className={s.more} to={"/projects"}>{"See more >>"}</AppLink>


    </AppContainer>
  )
}