import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import injections from '../injections'
import { useMutation } from '@tanstack/react-query'
import { jwtDecode } from 'jwt-decode'
import { ILoginEntity, ITokenEntity } from '../../domain/models'
import { useLocalStorage } from '../../../common/presenter/hooks'
import { GlobalContext } from '../../../common/presenter/contexts/global'
import AuthContext from '../contexts/Context'
import { IDecodedTokenDto } from '../../infrastructure/models/dto'
import { IServerError } from '../../../common/domain/models'
import { DefaultLoginEntity } from '../../domain/models'


const useLogin = () => {
  const {
    setUser
  } = useContext(GlobalContext)

  const {
    setModalState, setLoginData
  } = useContext(AuthContext)

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

      setLoginData(DefaultLoginEntity)

      navigate('/home')
      return
    },
    onError: (e: unknown) => {
      const error = e as IServerError
      setModalState({
        open: true,
        title: "Error",
        content: error.detail
      })
    }
  })
}

export { useLogin }
