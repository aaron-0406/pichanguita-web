
import LoginLeft from '../../../components/Login/LoginLeft'
import LoginRight from '../../../components/Login/LoginRight'

import { StyledContainerLogin } from '../../../components/Login/LoginStyle'

const Login = () => {
  return (
    <StyledContainerLogin
      width={'100vw'}
      height={'100vh'}
      display={'flex'}
      justifyContent="center"
      alignItems="center"
    >
      <LoginLeft />
      <LoginRight />
    </StyledContainerLogin>
  )
}

export default Login
