import { normalizeText } from "../../../../helpers"
import { useState } from "react"
import { IAssetEntity } from "../../../domain/models"
import { MultiSelectProps } from "./models"
import { TopItem } from "./TopItem"
import { ListSearch } from "./ListSearch"
import { ListItem } from "./ListItem"


const MultiSelect = ({dataList, selectedOuter, setSelectedOuter, errors, placeholder, containerStyles}: MultiSelectProps) => {
    const [ searchValue, setSearchValue ] = useState<string>('')
    const [ selected, setSelected ] = useState<IAssetEntity[]>([])
    const [ open, setOpen ] = useState<boolean>(false)

    const compareNames = (name: string): boolean => {
      return normalizeText(name).startsWith(searchValue)
    }

    const onClickListItem = (data: IAssetEntity) => {
      if (!selected.map(obj => obj.tag).includes(data.tag)) {
        selected.push(data)
        setSelected(selected.filter(obj => obj))
        setSelectedOuter ? setSelectedOuter(new Set(selectedOuter?.add(data.tag))) : ''
      } else {
        setSelected(selected.filter(obj => obj.tag !== data.tag))
        selectedOuter?.delete(data.tag)
        setSelectedOuter ? setSelectedOuter(new Set(selectedOuter)) : ''
      }
      setSearchValue('')
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
            selected={selected.map(obj => obj.tag).includes(data.tag)}
            onClick={() => onClickListItem(data)}
            />
          )
        )}
          <button
            className="w-full sticky bottom-0 text-primary bg-orange-200 hover:scale-105"
            onClick={() => setOpen(!open)}
          >
            Cerrar
          </button>
        </ul>
        <p className="text-white text-xs">*Seleciona varios</p>
      </div>
    )
  }
  
export { MultiSelect }
