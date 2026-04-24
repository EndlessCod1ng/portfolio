import { HomePage } from "@/pages/HomePage"
import { routeConfig } from "@/shared/config/routeConfig"
import { Footer } from "@/widgets/Footer/ui/Footer"
import { Header } from "@/widgets/Header"
import { Socials } from "@/widgets/Socials"
import { Route, Routes } from "react-router"
import { useTheme } from "./providers/ThemeProvider"

interface AppProps {
  className?: string
}
export const App = (
  { className }: AppProps
) => {
  const { theme } = useTheme();
  return (
    <div className={`app app_theme_${theme}
      ${className ? className : ""}
    `}>
      <Header />
      {/* <Socials /> */}

      <main>
        <Routes>
          <Route element={
            <HomePage />} path="/" />
          {routeConfig.map(r => (<Route element={r.element} path={r.path} />))}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}