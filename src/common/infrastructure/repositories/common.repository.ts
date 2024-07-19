import { IHttp } from "../../../common/domain/repositories";
import { ICommonRepository } from "../../domain/repositories";
// import { getEnvironments } from "../../../helpers";

// const API_URL = getEnvironments().VITE_API_URL

export class CommonRepository implements ICommonRepository {
  constructor(readonly http: IHttp) {}

  //Write async api calls here
}
