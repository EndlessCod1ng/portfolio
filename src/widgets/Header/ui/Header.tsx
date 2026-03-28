import { routeConfig } from "@/shared/config/routeConfig"
import s from "./Header.module.scss"

interface HeaderProps {
  className?: string
}
export const Header = (
  { className }: HeaderProps
) => {
  return (
    <div className={`${s.header} ${className ? className : ""}`}>
      {routeConfig.map(r => <div key={r.name}>{r.name}</div>)}
    </div>
  )
}