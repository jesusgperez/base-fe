import { InputProps } from "./models"

const Input = (props: InputProps) => {
  const hasError = props.errors ? props.errors.hasError : false

  return (
    <div className={`flex flex-col ${props.containerStyles} `}>
      <input
        className={`container outline-none rounded-lg border border-black h-9 ${props.customStyles} ${!!props.value ? 'text-sm' : 'text-xs'}`}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
      <p className={`text-xs text-red-500 ${!hasError ? 'hidden' : 'block'}`}>
        {props.errors ? props.errors.message : ""}
      </p>
    </div>
  )
}

export { Input }
