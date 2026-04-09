import { routeConfig } from "@/shared/config/routeConfig"
import { AppLogo } from "@/shared/ui/AppLogo/AppLogo"
import { AppLink } from "@/shared/ui/AppLink/AppLink"
import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
import s from "./Header.module.scss"
import { useState } from "react"
import { AppButton } from "@/shared/ui/AppButton/AppButton"
import cn from "classnames"
import { useBodyScrollLock } from "@/shared/hooks/useBodyScrollLock/useBodyScrollLock"

interface HeaderProps {
  className?: string
}
export const Header = (
  { className }: HeaderProps
) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  useBodyScrollLock(isVisible)

  return (
    <header className={`${s.header} ${className ? className : ""}`}>
      <AppContainer className={s.container}>
        <AppLogo />

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

      </AppContainer>
    </header >
  )
}