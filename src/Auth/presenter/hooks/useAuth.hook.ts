import injections from '../injections'
import { jwtDecode } from 'jwt-decode'
import { ITokenEntity } from '../../domain/models'
import { useLocalStorage } from '../../../common/presenter/hooks'
import { IDecodedTokenDto } from '../../infrastructure/models/dto'
import { IUseAuthProps } from '../../domain/models'


const useAuth = async ({setUser, navigate}: IUseAuthProps) => {
  debugger
  const useStorage = useLocalStorage()
  const tokenEntity: ITokenEntity | null = useStorage.getStorage('token')


  // No token at all
  if (!tokenEntity) {
    navigate('/login')
    return
  }

  if (! tokenEntity!.accessToken || ! tokenEntity!.refreshToken) {
    navigate('/login')
    return
  }

  const decodedRefreshToken = jwtDecode(tokenEntity!.refreshToken)

  // Expired refresh token
  if (!decodedRefreshToken || 
      Date.now() > decodedRefreshToken.exp! * 1000) {
    navigate('/login')
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
    
    useStorage.setStorage('token', refreshedToken)
    const decodedAccessToken: IDecodedTokenDto = jwtDecode(refreshedToken.accessToken)

    setUser({
      firstName: decodedAccessToken.first_name,
      lastName: decodedAccessToken.last_name,
      email: decodedAccessToken.email,
      username: decodedAccessToken.username
    })
  } catch (e) {
    navigate('/login')
    return
  }
}

export { useAuth }
