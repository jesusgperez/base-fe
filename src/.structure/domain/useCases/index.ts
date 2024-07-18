import { IAppNameInfrastructureRepository } from "../repositories"
import { AppNameUseCase } from "./app_name.useCase"

export const useCasesAppName = (repositories: IAppNameInfrastructureRepository) => ({
  AppNameUseCase: new AppNameUseCase(repositories.app_name)
})
