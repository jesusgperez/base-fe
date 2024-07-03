export type ITokenDto = {
  access: string,
  refresh: string
}

export type IDecodedTokenDto = {
  exp: number,
  iat: number,
  jti: string,
  user_id: number,
  first_name: string,
  last_name: string,
  email: string,
  username: string
}
