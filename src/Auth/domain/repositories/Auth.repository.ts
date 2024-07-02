import { ILoginEntity, ITokenEntity } from "../models/entity";

export interface IAuthRepository {
  // Write your functions interface
  refreshToken(refreshToken: string): Promise<ITokenEntity>;
  loginUser(loginData: ILoginEntity): Promise<ITokenEntity>;
}
