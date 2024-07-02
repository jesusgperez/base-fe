import { ITokenEntity } from "../../../domain/models";
import { ITokenDto } from "../dto";

export class TokenAdapter {
  static TokenDtoToTokenEntity(token: ITokenDto): ITokenEntity {
    return {
      accessToken: token.access,
      refreshToken: token.access,
    }
  }

  static TokenEntityToTokenDto(token: ITokenEntity): ITokenDto {
    return {
      access: token.accessToken,
      refresh: token.refreshToken,
    }
  }
}
