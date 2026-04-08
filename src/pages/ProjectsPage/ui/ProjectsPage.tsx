import { Page } from "@/shared/layouts/Page"
import { Projects } from "@/widgets/Projects"
interface ProjectsPageProps {
  className?: string
}
const ProjectsPage = (
  { className }: ProjectsPageProps
) => {
  return (
    <Page>
      <Projects />
    </Page>
  )
}
export default ProjectsPage