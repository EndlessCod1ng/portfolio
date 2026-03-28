import { Header } from "@/widgets/Header"

interface AppProps {
  className?: string
}
export const App = (
  { className }: AppProps
) => {
  return (
    <div className={`
      ${className ? className : undefined}
    `}>
      <Header />
      <div>App</div>
    </div>
  )
}