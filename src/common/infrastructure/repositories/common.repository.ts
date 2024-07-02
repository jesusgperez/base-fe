import { IHttp } from "../../../common/domain/repositories";
import { ICommonRepository } from "../../domain/repositories";
import { getEnvironments } from "../../../helpers";
import { IUserDto } from "../models/dto";
import { HttpMethod } from "../models/interfaces";
import { UserAdapter } from "../models/adapters";
import { AxiosError, Method } from "axios";
import { IUserEntity } from "../../domain/models";

const API_URL = getEnvironments().VITE_API_URL

export class AppNameRepository implements ICommonRepository {
  constructor(readonly http: IHttp) {}

  //Write async api calls here
  async refreshToken(): Promise<IUserEntity> {
    try {
      const response = await this.http.request<IUserDto>({
        method: HttpMethod.get as Method,  
        headers: {
          Authorization: ''
        },
        params: {},
        url: `${API_URL}/token/refresh`
      })

      return UserAdapter.UserDtoToUserEntity(response)
    } catch (error: unknown) {
      const err = error as AxiosError
      const data = err.response!.data
      // Pop up the error message
      throw {message: data}
    }
  }
}
