import { IDecodedTokenEntity, ITokenEntity } from "../../../domain/models";
import { IDecodedTokenDto, ITokenDto } from "../dto";

export class TokenAdapter {
  static TokenDtoToTokenEntity(token: ITokenDto): ITokenEntity {
    return {
      accessToken: token.access ?? "",
      refreshToken: token.refresh ?? "",
    }
  }

  static TokenEntityToTokenDto(token: ITokenEntity): ITokenDto {
    return {
      access: token.accessToken,
      refresh: token.refreshToken,
    }
  }

  static DecodedTokenDtoToTokenEntity(
    token: IDecodedTokenDto
  ): IDecodedTokenEntity {
    return {
      exp: token.exp ?? "",
      iat: token.iat ?? "",
      jti: token.jti ?? "",
      userId: token.user_id ?? "",
      firstName: token.first_name ?? "",
      lastName: token.last_name ?? "",
      email: token.email ?? "",
      username: token.username ?? ""
    }
  }

  static DecodedTokenEntityToTokenDto(
    token: IDecodedTokenEntity
  ): IDecodedTokenDto {
    return {
      exp: token.exp,
      iat: token.iat,
      jti: token.jti,
      user_id: token.userId,
      first_name: token.firstName,
      last_name: token.lastName,
      email: token.email,
      username: token.username
    }
  }
}
