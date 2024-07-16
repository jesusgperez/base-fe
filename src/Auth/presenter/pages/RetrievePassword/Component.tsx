import { AuthBackgroundLayout, AuthForm } from "../../layouts"
import { RetrievePasswordProps } from "./models"

const Component = ({onRetrieve}: RetrievePasswordProps) => {
  return (
    <AuthBackgroundLayout>
      <AuthForm
        onSubmit={() => {}}
      >
        <></>
      </AuthForm>
    </AuthBackgroundLayout>
  )
}

export default Component
