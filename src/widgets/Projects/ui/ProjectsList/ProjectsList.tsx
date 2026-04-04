import cn from "classnames"
import s from "./ProjectsList.module.scss"
import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle"
interface ProjectsListProps {
  className?: string
}
export const ProjectsList = (
  { className }: ProjectsListProps
) => {
  return (
    <div className={cn(s.projectsList, className)}>
      <AppContainer>
        <AppTitle className={s.title} title={"Projects"} />
      </AppContainer>
    </div>
  )
}