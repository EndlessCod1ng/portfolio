import { Banner } from "@/widgets/Banner/ui/Banner"
import { Projects } from "@/widgets/Projects"
import { Stack } from "@/widgets/Stack"

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
      <Stack />
      <Projects />
    </div>
  )
}
export default HomePage