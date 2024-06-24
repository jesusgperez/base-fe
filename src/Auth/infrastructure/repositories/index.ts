import { IAuthInfrastructureRepository } from "../../domain/repositories";
import { IHttpRepositoryInfrastructure } from "../../../common/infrastructure/repositories/infrastructure.repository";
import { AuthRepository } from "./Auth.repository";

export const AuthRepositoryInfrastructure = (
  infrastructure: IHttpRepositoryInfrastructure
): IAuthInfrastructureRepository => ({
  Auth: new AuthRepository(infrastructure.http)
})
