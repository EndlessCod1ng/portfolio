import { routeConfig } from "@/shared/config/routeConfig"
import { AppLogo } from "@/shared/ui/AppLogo/AppLogo"
import { AppLink } from "@/shared/ui/AppLink/AppLink"
import { AppContainer } from "@/shared/ui/AppContainer/AppContainer"
import s from "./Header.module.scss"

interface HeaderProps {
  className?: string
}
export const Header = (
  { className }: HeaderProps
) => {
  return (
    <header className={`${s.header} ${className ? className : ""}`}>
      <AppContainer className={s.container}>
        <div>
          <AppLogo />
        </div>
        <nav className={s.nav}>
          {routeConfig.map(r => <AppLink key={r.name}>{r.name}</AppLink>)}
        </nav>
      </AppContainer>
    </header>
  )
}