import { IUserEntity } from "../models"

export interface ICommonRepository {
  // Write your functions interface
  refreshToken(): Promise<IUserEntity>;
}
