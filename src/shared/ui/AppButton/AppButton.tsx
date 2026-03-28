interface AppButtonProps {
  className?: string
}
export const AppButton = (
  { className }: AppButtonProps
) => {
  return (
    <div className={`
      ${className ? className : ""}
    `}>
      <div>AppButton</div>
    </div>
  )
}