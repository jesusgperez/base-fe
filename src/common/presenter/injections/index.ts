import { useCasesCommon } from "../../domain/useCases";
import { HttpRepositoryInfrastructure } from "../../../common/infrastructure/repositories";
import { CommonRepositoryInfrastructure } from "../../infrastructure/repositories";

const repositoryInfrastructureInstance = HttpRepositoryInfrastructure()
const repositoryInfrastructureAppNameInstance = CommonRepositoryInfrastructure(
  repositoryInfrastructureInstance
) // Injection of dependencies

const useCasesCommonInstance = useCasesCommon(
  repositoryInfrastructureAppNameInstance
)

export default useCasesCommonInstance
