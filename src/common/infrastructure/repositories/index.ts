import { ICommonInfrastructureRepository } from "../../domain/repositories";
import { CommonRepository } from "./common.repository";
import { Http } from "./http.repository";
import { IHttpRepositoryInfrastructure } from "./infrastructure.repository";

export const CommonRepositoryInfrastructure = (
  infrastructure: IHttpRepositoryInfrastructure
): ICommonInfrastructureRepository => ({
  common: new CommonRepository(infrastructure.http)
})


export const  HttpRepositoryInfrastructure = (): IHttpRepositoryInfrastructure => ({
  http: new Http()
})
