import { ListItemProps } from "./models"


const ListItem = ({selected, onClick, data, show} : ListItemProps) => {
  return (
    <li
      className={`p-2 text-left text-sm hover:bg-terciary hover:text-primary ${selected && 'bg-terciary text-primary'} ${!show && 'hidden'}`}
      onClick={onClick}
    >
      {data}
    </li>
  )
}

export { ListItem }
