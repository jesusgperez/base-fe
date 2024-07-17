import { IRetrieveEntity } from "../../../domain/models";
import { IRetrieveDto } from "../dto";

export class RetrieveAdapter {
  static RetrieveDtoToRetrieveEntity(data: IRetrieveDto): IRetrieveEntity {
    return {
      email: data.email ?? "",
    }
  }

  static RetrieveEntityToRetrieveDto(data: IRetrieveEntity): IRetrieveDto {
    return {
      email: data.email,
    }
  }
}
