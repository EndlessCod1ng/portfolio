import { routeConfig } from "@/shared/config/routeConfig"
import { AppLogo } from "@/shared/ui/AppLogo/AppLogo"
import { AppLink } from "@/shared/ui/AppLink/AppLink"
import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
import s from "./Header.module.scss"
import { useState } from "react"
import { AppButton } from "@/shared/ui/AppButton/AppButton"
import cn from "classnames"
import { useBodyScrollLock } from "@/shared/hooks/useBodyScrollLock/useBodyScrollLock"
import  MoonIcon from "@/shared/assets/images/header/moon.svg?react"
import  SunIcon from "@/shared/assets/images/header/sun.svg?react"

interface HeaderProps {
  theme:"light" | "dark"
  changeTheme:()=>void
  className?: string
}
export const Header = (
  { theme,changeTheme, className }: HeaderProps
) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  useBodyScrollLock(isVisible)

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
              {routeConfig.map(r => <li key={r.name}>
                <AppLink onClick={() => { setIsVisible(false) }} to={r.path}>{r.name}</AppLink>
              </li>)}
            </ul>
          </nav>
          <AppButton onClick={changeTheme}>
            {theme === "dark" ?
            <SunIcon className={s.themeIcon} />
              :
            <MoonIcon  className={s.themeIcon} />
          }
          </AppButton>
        </div>
        
      </AppContainer>
    </header >
  )
}