import { routeConfig } from "@/shared/config/routeConfig"
import { AppLogo } from "@/shared/ui/AppLogo/AppLogo"
import { AppLink } from "@/shared/ui/AppLink/AppLink"
import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
import s from "./Header.module.scss"
import { useState } from "react"
import { AppButton } from "@/shared/ui/AppButton/AppButton"
import cn from "classnames"

interface HeaderProps {
  className?: string
}
export const Header = (
  { className }: HeaderProps
) => {
  const [isVisible, setIsVisible] = useState<boolean>(true)

  return (
    <header className={`${s.header} ${className ? className : ""}`}>
      <AppContainer className={s.container}>
        <AppLogo />
        
        <nav className={s.nav}>

          <AppButton onClick={() => { setIsVisible(!isVisible) }} className={cn(s.burgerWrappe)}>
            <span className={s.burger}></span>
          </AppButton>

          <ul className={cn(s.list, { [s.isVisible]: isVisible })}>
            {routeConfig.map(r => <li>
              <AppLink key={r.name}>{r.name}</AppLink>
            </li>)}
          </ul>

        </nav>

      </AppContainer>
    </header >
  )
}