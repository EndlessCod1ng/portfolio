import { routeConfig } from "@/shared/config/routeConfig"
import s from "./Header.module.scss"
import { AppLogo } from "@/shared/ui/AppLogo/AppLogo"
import { AppLink } from "@/shared/ui/AppLink/AppLink"

interface HeaderProps {
  className?: string
}
export const Header = (
  { className }: HeaderProps
) => {
  return (
    <div className={`${s.header} ${className ? className : ""}`}>
      <div>
        <AppLogo />
      </div>
      <nav className={s.nav}>
        {routeConfig.map(r => <AppLink key={r.name}>{r.name}</AppLink>)}
      </nav>
    </div>
  )
}