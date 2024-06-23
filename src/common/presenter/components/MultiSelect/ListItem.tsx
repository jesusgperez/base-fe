import { ListItemProps } from "./models"


const ListItem = ({selected, onClick, data, show} : ListItemProps) => {
  return (
    <li
      className={`p-2 text-left text-sm hover:bg-pmiOrange hover:text-pmiDarkPurple ${selected && 'bg-pmiOrange text-pmiDarkPurple'} ${!show && 'hidden'}`}
      onClick={onClick}
    >
      {data}
    </li>
  )
}

export { ListItem }
