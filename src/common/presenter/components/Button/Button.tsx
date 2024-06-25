import { ButtonProps } from "./models"

const Button = ({text, customStyles, onClick}: ButtonProps) => {
  return (
    <button
      className={`px-10 py-2 rounded-lg ${customStyles} hover:shadow-lg hover:bg-opacity-80 hover:-translate-y-0.5 transition duration-500`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export { Button }
