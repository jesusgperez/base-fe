import { IRetrieveEntity } from "../../../domain/models"

export type RetrievePasswordProps = {
  onRetrieve: (retrieveData: IRetrieveEntity) => void
}
