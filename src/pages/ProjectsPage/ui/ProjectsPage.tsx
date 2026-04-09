import { Page } from "@/shared/layouts/Page/Page"
import { Projects } from "@/widgets/Projects"
interface ProjectsPageProps {
  className?: string
}
const ProjectsPage = (
  { className }: ProjectsPageProps
) => {
  return (
    <Page className={className}>
      <Projects />
    </Page>
  )
}
export default ProjectsPage