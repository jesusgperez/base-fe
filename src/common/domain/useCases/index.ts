import { ICommonInfrastructureRepository } from "../repositories"
import { CommonUseCase } from "./common.useCase"

export const useCasesCommon = (repositories: ICommonInfrastructureRepository) => ({
  CommonUseCase: new CommonUseCase(repositories.common)
})
