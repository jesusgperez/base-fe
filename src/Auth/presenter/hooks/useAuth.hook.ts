import injections from '../injections'
import { jwtDecode } from 'jwt-decode'
import { ITokenEntity } from '../../domain/models'
import { useLocalStorage } from '../../../common/presenter/hooks'
import { IDecodedTokenDto } from '../../infrastructure/models'
import { IUseAuthProps } from '../../domain/models'
import { AuthUrls } from '../pages/AuthUrls'


const useAuth = async ({setUser, navigate}: IUseAuthProps) => {
  const useStorage = useLocalStorage()
  const tokenEntity: ITokenEntity | null = useStorage.getStorage('token')

  // No token at all
  if (!tokenEntity) {
    navigate(AuthUrls.login)
    return
  }

  if (! tokenEntity!.accessToken || ! tokenEntity!.refreshToken) {
    navigate(AuthUrls.login)
    return
  }

  const decodedRefreshToken = jwtDecode(tokenEntity!.refreshToken)

  // Expired refresh token
  if (!decodedRefreshToken || 
      Date.now() > decodedRefreshToken.exp! * 1000) {
    navigate(AuthUrls.login)
    return
  }

  const decodedAccessToken: IDecodedTokenDto = jwtDecode(tokenEntity!.accessToken)

  // Valid access token
  if (Date.now() < decodedAccessToken.exp! * 1000) {
    setUser({
      firstName: decodedAccessToken.first_name,
      lastName: decodedAccessToken.last_name,
      email: decodedAccessToken.email,
      username: decodedAccessToken.username
    })
    
    return
  }

  try {
    const refreshedToken: ITokenEntity = await injections.
    AuthUseCase.Auth.refreshToken(tokenEntity!.refreshToken);

    const decodedAccessToken: IDecodedTokenDto = jwtDecode(refreshedToken.accessToken)

    setUser({
      firstName: decodedAccessToken.first_name,
      lastName: decodedAccessToken.last_name,
      email: decodedAccessToken.email,
      username: decodedAccessToken.username
    })
  } catch (e) {
    navigate(AuthUrls.login)
    return
  }
}

export { useAuth }
