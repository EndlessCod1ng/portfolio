import { HomePage } from "@/pages/HomePage"
import { routeConfig } from "@/shared/config/routeConfig"
import { Footer } from "@/widgets/Footer/Footer"
import { Header } from "@/widgets/Header"
import { useState } from "react"
import { Route, Routes } from "react-router"

interface AppProps {
  className?: string
}
export const App = (
  { className }: AppProps
) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <div className={`app app_theme_${theme}
      ${className ? className : ""}
    `}>
      <Header theme={theme} changeTheme={changeTheme} />

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