import cn from "classnames"
import s from "./Projects.module.scss"
import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
interface ProjectsProps {
  className?: string
}
export const Projects = (
  { className }: ProjectsProps
) => {
  return (
    <AppContainer className={cn(s.projects, className)}>
      <div>Projects</div>
    </AppContainer>
  )
}