import { ILoginEntity } from "../../../domain/models";
import { ILoginDto } from "../dto";

export class LoginAdapter {
  static LoginDtoToLoginEntity(login: ILoginDto): ILoginEntity {
    return {
      email: login.email,
      password: login.password,
    }
  }

  static LoginEntityToLoginDto(login: ILoginEntity): ILoginDto {
    return {
      email: login.email,
      password: login.password,
    }
  }
}