import { useCasesAppName } from "../../domain/useCases";
import { HttpRepositoryInfrastructure } from "../../../common/infrastructure/repositories";
import { appNameRepositoryInfrastructure } from "../../infrastructure/repositories";

const repositoryInfrastructureInstance = HttpRepositoryInfrastructure()
const repositoryInfrastructureAppNameInstance = appNameRepositoryInfrastructure(
  repositoryInfrastructureInstance
) // Injection of dependencies

const useCasesAppNameInstance = useCasesAppName(
  repositoryInfrastructureAppNameInstance
)

export default useCasesAppNameInstance
