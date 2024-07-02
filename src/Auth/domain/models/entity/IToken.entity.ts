export type ITokenEntity = {
  accessToken: string,
  refreshToken: string
}

export const EmptyTokenEntity: ITokenEntity = {
  accessToken: '',
  refreshToken: ''
}
