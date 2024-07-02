import { IUseLocalStorage } from "../../domain/models/interfaces/IUseLocalStorage.interface"

const useLocalStorage = (): IUseLocalStorage => {
  const getStorage = (key: string) => {
    const value = localStorage.getItem(key)
    return value ? JSON.stringify(value) : null
  }

  const setStorage = (key: string, value: string) => {
    const strValue = JSON.stringify(value)
    return localStorage.setItem(key, strValue)
  }

  return {
    getStorage,
    setStorage
  }
}

export { useLocalStorage }
