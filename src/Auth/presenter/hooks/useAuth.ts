import injections from '../injections'
import { useContext } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { ITokenEntity } from '../../domain/models'
import { useLocalStorage } from '../../../common/presenter/hooks'
import { GlobalContext } from '../../../common/presenter/contexts/global'
import { IDecodedTokenDto } from '../../infrastructure/models/dto'

const useAuth = async () => {
  const {
    setUser
  } = useContext(GlobalContext)
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
  }
}

export { useAuth }
