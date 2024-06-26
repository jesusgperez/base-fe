import { IUserEntity } from "../../../domain/models";
import { IUserDto } from "../dto";

export class UserAdapter {
  static UserDtoToUserEntity(user: IUserDto): IUserEntity {
    return {
      firstName: user.first_name,
      lastName: user.last_name,
      username: user.username,
      email: user.email
    }
  }

  static UserEntityToUserDto(user: IUserEntity): IUserDto {
    return {
      first_name: user.firstName,
      last_name: user.lastName,
      username: user.username,
      email: user.email
    }
  }
}
