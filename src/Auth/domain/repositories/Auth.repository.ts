import { ILoginEntity, ISignupEntity, ITokenEntity } from "../models/entity";


export interface IAuthRepository {
  // Write your functions interface
  refreshToken(refreshToken: string): Promise<ITokenEntity>;
  loginUser(loginData: ILoginEntity): Promise<ITokenEntity>;
  signupUser(signupData: ISignupEntity): Promise<ISignupEntity>;
}
