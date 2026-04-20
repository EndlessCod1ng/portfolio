import cn from "classnames"
import s from "./Socials.module.scss"
interface SocialsProps {
  className?: string
}
export const Socials = (
  { className }: SocialsProps
) => {
  return (
    <div className={cn(s.socials, className)}>

      {Array(3).fill(null).map((item, i) => (<div key={i} className={s.item}>{item}</div >))}
    </div>
  )
}