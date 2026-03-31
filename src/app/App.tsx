import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
import { Header } from "@/widgets/Header"
import { useState } from "react"

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
      <AppContainer>
        <div>App</div>
      </AppContainer>
    </div>
  )
}