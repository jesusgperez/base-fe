export type IUseLocalStorage = {
  getStorage: (key: string) => any;
  setStorage: (key: string, value: any) => void;
}
