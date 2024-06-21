import { IHttp } from "../../../common/domain/repositories";
import { IAppNameRepository } from "../../domain/repositories";
import { getEnvironments } from "../../../helpers";

const API_URL = getEnvironments().VITE_API_URL

export class AppNameRepository implements IAppNameRepository {
  constructor(readonly http: IHttp) {}

  //Write async api calls here
}
