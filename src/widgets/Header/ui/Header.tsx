import { navRouteConfig } from "@/shared/config/routeConfig"
import { AppLogo } from "@/shared/ui/AppLogo/AppLogo"
import { AppLink } from "@/shared/ui/AppLink/AppLink"
import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
import s from "./Header.module.scss"
import { useState } from "react"
import { AppButton } from "@/shared/ui/AppButton/AppButton"
import cn from "classnames"
import { useBodyScrollLock } from "@/shared/hooks/useBodyScrollLock/useBodyScrollLock"
import MoonIcon from "@/shared/assets/images/header/moon.svg?react"
import SunIcon from "@/shared/assets/images/header/sun.svg?react"
import { useTheme } from "@/app/providers/ThemeProvider"
import { useTranslation } from "react-i18next"

interface HeaderProps {
  className?: string
}
export const Header = (
  { className }: HeaderProps
) => {
  const { theme, changeTheme } = useTheme();
  const [isVisible, setIsVisible] = useState<boolean>(false)
  useBodyScrollLock(isVisible)
  const { i18n, t } = useTranslation();

  return (
    <header className={`${s.header} ${className ? className : ""}`}>
      <AppContainer className={s.container}>
        <AppLogo />

        <div className={s.navContainer}>
          <nav className={s.nav}>
            <AppButton onClick={() => {
              setIsVisible(!isVisible)
            }} className={cn(s.burgerWrapper, { [s.isVisible]: isVisible })}>
              <span className={s.burger}></span>
            </AppButton>
            <ul
              className={cn(s.list, { [s.isVisible]: isVisible })}>
              {navRouteConfig.map(r => <li key={r.name}>
                <AppLink size="s" onClick={() => { setIsVisible(false) }} to={r.path}>{t(`${r.name}`)}</AppLink>
              </li>)}
            </ul>
          </nav>
          <AppButton style={{ paddingTop: "5px" }} onClick={changeTheme}>
            {theme === "dark" ?
              <SunIcon className={s.themeIcon} />
              :
              <MoonIcon className={s.themeIcon} />
            }
          </AppButton>
          <AppButton onClick={() => i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")}>{i18n.language === "en" ? "Ru" : "En"}</AppButton>

        </div>

      </AppContainer>
    </header >
  )
}