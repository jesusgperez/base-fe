import { IChangeEntity } from "../../../domain/models";
import { IChangeDto } from "../dto";

export class ChangeAdapter {
  static ChangeDtoToChangeEntity(data: IChangeDto): IChangeEntity {
    return {
      code: data.code ?? "",
      password: data.password ?? "",
      passwordRepeat: data.password ?? ""
    }
  }

  static ChangeEntityToChangeDto(data: IChangeEntity): IChangeDto {
    return {
      code: data.code,
      password: data.password,
    }
  }
}
