import { ButtonProps } from "./models"

const Button = ({text, customStyles, onClick}: ButtonProps) => {
  return (
    <button
      className={`px-10 py-2 rounded-lg ${customStyles} hover:shadow-lg hover:opacity-50`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export { Button }
