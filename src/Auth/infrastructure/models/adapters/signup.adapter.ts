import { ISignupEntity } from "../../../domain/models";
import { ISignupDto } from "../dto";

export class SignupAdapter {
  static SignupDtoToSignupEntity(signup: ISignupDto): ISignupEntity {
    return {
      firstName: signup.first_name ?? "",
      lastName: signup.last_name ?? "",
      email: signup.email ?? "",
      password: signup.password ?? "",
      passwordRepeat: ""
    }
  }

  static SignupEntityToSignupDto(signup: ISignupEntity): ISignupDto {
    return {
      first_name: signup.firstName,
      last_name: signup.lastName,
      email: signup.email,
      password: signup.password,
    }
  }
}
