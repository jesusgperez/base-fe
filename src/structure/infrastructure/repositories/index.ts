import { IAppNameInfrastructureRepository } from "../../domain/repositories";
import { IHttpRepositoryInfrastructure } from "../../../common/infrastructure/repositories/infrastructure.repository";
import { AppNameRepository } from "./app_name.repository";

export const appNameRepositoryInfrastructure = (
  infrastructure: IHttpRepositoryInfrastructure
): IAppNameInfrastructureRepository => ({
  app_name: new AppNameRepository(infrastructure.http)
})
