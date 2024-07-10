import { AuthBackgroundLayoutProps } from "./models"

const AuthBackgroundLayout = ({children}: AuthBackgroundLayoutProps) => {
  return (
  <div 
    className="bg-center bg-cover bg-no-repeat bg-wave h-screen w-screen"
  >
    {children}
  </div>
  )
}

export { AuthBackgroundLayout }
