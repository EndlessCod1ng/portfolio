import { Page } from "@/shared/layouts/Page/Page"
import { Banner } from "@/widgets/Banner/ui/Banner"
import { Contacts } from "@/widgets/Contacts"
import { Projects } from "@/widgets/Projects"
// import { Stack } from "@/widgets/Stack"
import s from "./HomePage.module.scss"

interface HomePageProps {
  className?: string
}
const HomePage = (
  { className }: HomePageProps
) => {
  return (
    <Page className={className}>
      <Banner />
      {/* <Stack className={s.section} /> */}
      <Projects className={s.section} />
      <Contacts className={s.section} />
    </Page>
  )
}
export default HomePage