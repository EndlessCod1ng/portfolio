import { Page } from "@/shared/layouts/Page/Page"
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
    <Page className={className}>
      <Banner />
      <Stack />
      <Projects />
    </Page>
  )
}
export default HomePage