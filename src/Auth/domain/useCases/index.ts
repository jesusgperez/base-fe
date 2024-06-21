import { IAuthInfrastructureRepository } from "../repositories"
import { AuthUseCase } from "./Auth.useCase"

export const useCasesAuth = (repositories: IAuthInfrastructureRepository) => ({
  AuthUseCase: new AuthUseCase(repositories.Auth)
})
