import { CheckBoxProps } from "./models"
import { useState } from "react"

const CheckBox = (props: CheckBoxProps) => {

  const [ checked, setChecked ] = useState<boolean>(false)

  const onChange = () => {
    setChecked(!checked)
    props.setOuterCheck ? props.setOuterCheck(!checked) : ''
  }

  const hasError = props.errors ? props.errors.hasError : false

  return (
    <div className={`flex flex-col items-center justify-center ${props.containerStyle}`}>
      <div className="flex">
        <input 
          id={`checkbox-${props.id}`}
          type="checkbox"
          onChange={onChange}
          checked={checked}
        />
        <label
          htmlFor={`checkbox-${props.id}`} className="ml-2 text-xs text-white"
        >
          {props.title}
        </label>
      </div>
      <p className={`text-xs text-red-500 ${!hasError ? 'hidden' : 'block'}`}>
        {props.errors ? props.errors.message : ""}
      </p>
    </div>
  )
}

export { CheckBox }
