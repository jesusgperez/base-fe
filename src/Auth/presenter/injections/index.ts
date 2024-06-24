import { useCasesAuth } from "../../domain/useCases";
import { HttpRepositoryInfrastructure } from "../../../common/infrastructure/repositories";
import { AuthRepositoryInfrastructure } from "../../infrastructure/repositories";

const repositoryInfrastructureInstance = HttpRepositoryInfrastructure()
const repositoryInfrastructureAuthInstance = AuthRepositoryInfrastructure(
  repositoryInfrastructureInstance
) // Injection of dependencies

const useCasesAuthInstance = useCasesAuth(
  repositoryInfrastructureAuthInstance
)

export default useCasesAuthInstance
