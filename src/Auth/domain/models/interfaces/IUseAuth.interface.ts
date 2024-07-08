import { IUserEntity } from '../../../../common/domain/models'

export type IUseAuthProps = {
  navigate: (to: string) => void,
  setUser: (user: IUserEntity) => void
}
