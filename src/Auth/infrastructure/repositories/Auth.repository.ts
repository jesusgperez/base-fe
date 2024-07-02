import { ITokenEntity } from "../../domain/models";
import { ITokenDto } from "../models/dto";
import { TokenAdapter } from "../models/adapters";
import { IHttp } from "../../../common/domain/repositories";
import { IAuthRepository } from "../../domain/repositories";
import { getEnvironments } from "../../../helpers";
import { Method } from "axios";
import { HttpMethod } from "../../../common/infrastructure/models/interfaces";
import { AxiosError } from "axios";

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
        url: `${API_URL}/token/refresh/`
      })

      return TokenAdapter.TokenDtoToTokenEntity({
        access: response.access,
        refresh: refreshToken
      })
    } catch (error: unknown) {
      const err = error as AxiosError
      const data = err.response!.data
      // Pop up the error message
      throw {message: data}
    }
  }
}
