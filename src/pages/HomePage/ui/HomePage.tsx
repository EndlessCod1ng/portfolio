import { Banner } from "@/widgets/Banner/ui/Banner"
import { ProjectsList } from "@/widgets/Projects"

interface HomePageProps {
  className?: string
}
const HomePage = (
  { className }: HomePageProps
) => {
  return (
    <div className={`
      ${className ? className : ""}
    `}>
      <Banner />
      <Banner />
      <ProjectsList />
    </div>
  )
}
export default HomePage