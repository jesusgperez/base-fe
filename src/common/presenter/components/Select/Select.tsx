import { useState } from "react"
import { SelectProps } from "./models"
import { normalizeText } from "../../../../helpers/utils"
import { IAssetEntity } from "../../../domain/models"
import { ListItem } from "./ListItem"
import { ListSearch } from "./ListSearch"
import { TopItem } from "./TopItem"


const Select = ({dataList, setSelectedOuter, errors, placeholder, containerStyles}: SelectProps) => {
  const [ searchValue, setSearchValue ] = useState<string>('')
  const [ selected, setSelected ] = useState<IAssetEntity>({name: '', tag: ''})
  const [ open, setOpen ] = useState<boolean>(false)

  const compareNames = (name: string): boolean => {
    return normalizeText(name).startsWith(searchValue)
  }

  const onClickListItem = (data: IAssetEntity) => {
    if (data.tag !== selected.tag) {
      setSelected(data)
      setSearchValue('')
      setSelectedOuter ? setSelectedOuter(data) : ''
      setOpen(false)
      setSearchValue('')
    }
  }

  return (
    <div className={`relative container w-full text-black ${containerStyles}`}>
      <TopItem
        open={open}
        setOpen={setOpen}
        selected={selected}
        errors={errors}
        placeholder={placeholder}
      />

      <ul className={`absolute w-full bg-secondary text-white overflow-y-auto max-h-60 ${!open && 'hidden'} border border-black z-10`}>
        <ListSearch
          value={searchValue}
          setValue={setSearchValue}
        />
        {dataList.map((data) => (
            <ListItem 
              key={data.tag}
              data={data.name}
              show={compareNames(data.name)}
              selected={data.tag === selected.tag}
              onClick={() => onClickListItem(data)}
            />
          )
        )}
      </ul>
    </div>
  )
}

export { Select }
