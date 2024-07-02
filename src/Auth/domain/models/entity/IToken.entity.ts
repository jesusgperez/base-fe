export type ITokenEntity = {
  accessToken: string,
  refreshToken: string
}

export const EmptyTokenEntity: ITokenEntity = {
  accessToken: '',
  refreshToken: ''
}

export type IDecodedTokenEntity = {
  exp: number,
  iat: number,
  jti: string,
  userId: number,
  firstName: string,
  lastName: string,
  email: string,
  username: string
}
