import { ILoginEntity, ITokenEntity } from "../../domain/models";
import { ITokenDto } from "../models/dto";
import { TokenAdapter } from "../models/adapters";
import { IHttp } from "../../../common/domain/repositories";
import { IAuthRepository } from "../../domain/repositories";
import { getEnvironments, flatErrors } from "../../../helpers";
import { Method } from "axios";
import { HttpMethod } from "../../../common/infrastructure/models/interfaces";
import { AxiosError } from "axios";
import { LoginAdapter } from "../models/adapters/login.adapter";
import { IServerError } from "../../../common/domain/models";

const API_URL = getEnvironments().VITE_API_URL

export class AuthRepository implements IAuthRepository {
  constructor(readonly http: IHttp) {}

  //Write async api calls here
  async refreshToken(refreshToken: string): Promise<ITokenEntity> {
    try {
      const response = await this.http.request<ITokenDto>({
        method: HttpMethod.post as Method,  
        headers: {},
        params: {},
        body: {
          refresh: refreshToken
        },
        url: `${API_URL}tkauth/token/refresh/`
      })

      return TokenAdapter.TokenDtoToTokenEntity({
        access: response.access,
        refresh: refreshToken
      })
    } catch (error: unknown) {
      const err = error as AxiosError
      const data = err.response!.data
      throw {message: data}
    }
  }

  async loginUser(loginData: ILoginEntity): Promise<ITokenEntity> {
    try {
      const sendData = LoginAdapter.LoginEntityToLoginDto(loginData)

      const response = await this.http.request<ITokenDto>({
        method: HttpMethod.post as Method,  
        headers: {},
        params: {},
        body: {...sendData},
        url: `${API_URL}tkauth/login/`
      })

      return TokenAdapter.TokenDtoToTokenEntity(response)
    } catch (error: unknown) {
      const err = error as AxiosError
      const data = err.response!.data as {[key: string]: string}
      let throwError: IServerError = {detail: ""}

      if (!data.hasOwnProperty("detail")){
        throwError = {detail: flatErrors(data)}
      } else {
        throwError = data as IServerError
      }

      throw throwError
    }
  }
}
