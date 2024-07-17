import { AuthFormProps } from "./models"


const AuthForm = ({children, onSubmit}: AuthFormProps) => {
  return (
    <form
      onSubmit={onSubmit} 
      className="flex justify-center items-center w-full h-full"
    >
      <div
        className="relative flex flex-col items-center bg-white rounded-lg shadow-2xl space-y-0 border border-gray w-3/4 h-1/3 md:space-y-10 md:h-1/2 lg:w-5/12"
      >
        {children}
      </div>
  </form>
  )
}

export { AuthForm }
