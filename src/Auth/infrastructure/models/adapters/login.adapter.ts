import { ILoginEntity } from "../../../domain/models";
import { ILoginDto } from "../dto";

export class LoginAdapter {
  static LoginDtoToLoginEntity(data: ILoginDto): ILoginEntity {
    return {
      email: data.email ?? "",
      password: data.password ?? "",
    }
  }

  static LoginEntityToLoginDto(data: ILoginEntity): ILoginDto {
    return {
      email: data.email,
      password: data.password,
    }
  }
}