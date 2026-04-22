import { useMemo, useState, type ReactNode } from "react"
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, type Theme } from "../lib/ThemeContext"

interface ThemeProviderProps {
  children: ReactNode
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme | "dark"

export const ThemeProvider = (
  { children }: ThemeProviderProps
) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaulltProps = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <ThemeContext.Provider value={defaulltProps} >
      {children}
    </ThemeContext.Provider>
  )
}