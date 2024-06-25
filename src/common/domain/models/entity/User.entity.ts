export type IUserEntity = {
  firstName: string,
  lastName: string,
  email: string,
  username: string
}

export const EmptyUser: IUserEntity = {
  firstName: '',
  lastName: '',
  email: '',
  username: ''
}
