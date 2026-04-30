import cn from "classnames"
import s from "./Projects.module.scss"
import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle"
import { AppButton } from "@/shared/ui/AppButton/AppButton"
import { AppLink } from "@/shared/ui/AppLink/AppLink"
import { useLocation } from "react-router"
import { useTranslation } from "react-i18next"

// import ProjectPhoto from "@/shared/assets/images/projects/project-2.png"



interface ProjectsProps {
  className?: string
}

export const Projects = (
  { className }: ProjectsProps
) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <AppContainer className={cn(s.projects, className)}>
      <AppTitle title={t("Projects")} className={s.title} />

      <div className={s.btns}>
        {[t("All"), "React", "Vue", "ModeJs", "NextJs", "NestJs",
          // "Python"
        ].map(t => (<AppButton variant="outlined" key={t}>{t}</AppButton>))}
      </div>

      <div className={s.projectsList}>

        {new Array(6).fill({ title: t("Portfolio"), imgUrl: "" }).map((p, i) => (
          <div key={p.title + i} className={s.project}>
            {/* <img className={s.projectImg} src={ProjectPhoto} alt={"project"} /> */}
            <div className={s.info}>
              <AppTitle TagName="h4" title={p.title} />
              <div className={s.links}>
                <AppLink size="s" to='https://endlesscod1ng.github.io/portfolio/'
                  target="_blank" variant="filled">{t("Live Preview")}</AppLink>
                <AppLink to='https://github.com/EndlessCod1ng/portfolio' target="_blank">{t("Code")}</AppLink>
              </div>
            </div>
          </div>
        ))}
      </div>
      {pathname !== "/projects" ?
        <AppLink className={s.more} to={"/projects"}>{`${t("See more")} >>`}</AppLink>

        : null}

    </AppContainer>
  )
}