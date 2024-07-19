import { AuthTitleProps } from "./models"

const AuthTitle = ({title, content}: AuthTitleProps) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <h1 className="text-2xl font-bold">
        {title}
      </h1>

      <p>
        {content}
      </p>
    </div>
  )
}


export { AuthTitle }
