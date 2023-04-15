import LoginLeft from './AppLoginLeft'
import LoginRight from '../AppLogin/AppLoginRight'

import { StyledContainerLogin } from './LoginStyle'

const AppLogin = () => {
  return (
    <StyledContainerLogin width="100vw" height="100vh" display="flex" justifyContent="center" alignItems="center">
      <LoginLeft />
      <LoginRight />
    </StyledContainerLogin>
  )
}

export default AppLogin
