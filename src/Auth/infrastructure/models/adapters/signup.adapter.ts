import { ISignupEntity } from "../../../domain/models";
import { ISignupDto } from "../dto";

export class SignupAdapter {
  static SignupDtoToSignupEntity(data: ISignupDto): ISignupEntity {
    return {
      firstName: data.first_name ?? "",
      lastName: data.last_name ?? "",
      email: data.email ?? "",
      password: data.password ?? "",
      passwordRepeat: ""
    }
  }

  static SignupEntityToSignupDto(data: ISignupEntity): ISignupDto {
    return {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
    }
  }
}
