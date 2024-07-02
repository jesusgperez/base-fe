import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import injections from '../injections'
import { useMutation } from '@tanstack/react-query'
import { jwtDecode } from 'jwt-decode'
import { ILoginEntity, ITokenEntity } from '../../domain/models'
import { useLocalStorage } from '../../../common/presenter/hooks'
import { GlobalContext } from '../../../common/presenter/contexts/global'
import { IDecodedTokenDto } from '../../infrastructure/models/dto'


const useLogin = () => {
  const {
    setUser
  } = useContext(GlobalContext)

  const navigate = useNavigate()

  return useMutation<ITokenEntity, Error, ILoginEntity>({
    mutationFn: (data) => injections.AuthUseCase.Auth.loginUser(data),
    onSuccess: (data) => {
      const storage = useLocalStorage()
      storage.setStorage('token', data)

      const decodedData: IDecodedTokenDto = jwtDecode(data.accessToken)

      setUser({
        firstName: decodedData.first_name,
        lastName: decodedData.last_name,
        email: decodedData.email,
        username: decodedData.username
      })

      navigate('/home')
      return
    },
    onError: (e) => {
      throw e
    }
  })
}

export { useLogin }
