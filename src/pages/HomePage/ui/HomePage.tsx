import { Banner } from "@/widgets/Banner/ui/Banner"

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
    </div>
  )
}
export default HomePage