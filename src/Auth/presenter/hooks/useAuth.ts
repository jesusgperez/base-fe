import injections from '../injections'
import { jwtDecode } from 'jwt-decode'
import { useLocalStorage } from '../../../common/presenter/hooks'
import { useNavigate } from 'react-router-dom'
import { ITokenEntity } from '../../domain/models'

const useAuth = async () => {
  const navigate = useNavigate()
  const useStorage = useLocalStorage()
  const tokenEntity: ITokenEntity | null = useStorage.getStorage('token')

  // No token at all
  if (!tokenEntity) {
    navigate('/login')
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

  const decodedAccessToken = jwtDecode(tokenEntity!.accessToken)

  // Valid access token
  if (Date.now() < decodedAccessToken.exp! * 1000) {
    return
  }

  try {
    const refreshedToken: ITokenEntity = await injections.
    AuthUseCase.Auth.refreshToken(tokenEntity!.refreshToken);

    useStorage.setStorage('token', refreshedToken)
  } catch (e) {
    navigate('/login')
  }
}

export { useAuth }
