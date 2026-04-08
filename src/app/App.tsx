import { HomePage } from "@/pages/HomePage"
import { routeConfig } from "@/shared/config/routeConfig"
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
  return (
    <div className={`app app_theme_${theme}
      ${className ? className : ""}
    `}>
      <Header />
      <Routes>
        <Route element={
          <HomePage />} path="/" />
        {routeConfig.map(r => (<Route element={r.element} path={r.path} />))}
      </Routes>
    </div>
  )
}