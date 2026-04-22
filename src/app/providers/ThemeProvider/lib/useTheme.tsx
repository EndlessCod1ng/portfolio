import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, type Theme } from "./ThemeContext";

interface UseThemeResult {
  theme: Theme
  changeTheme: () => void
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)
  const changeTheme = () => {
    let newTheme: Theme
    switch (theme) {
      case "dark":
        newTheme = "light"
        break;
      case "light":
        newTheme = "dark"
        break;
      default:
        newTheme = "dark"
    }
    setTheme?.(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme: theme || "dark", changeTheme
  }
}