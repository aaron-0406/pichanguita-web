import styled, { css } from 'styled-components'

import Container from '../../../ui/Container'
import Img from '../../../ui/Img'
import Phone from './Phone'

import SocialMedia from '../../../components/Login/LoginRight/SocialMedia'

import logoImgLogin from '../../../shared/assets/img/pichanguita.png'

const LoginRight = () => {
  return (
    <Styles
      width={'35%'}
      height={'90%'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      // backgroundColor={'#EBF6FC'}
      className="login-right"
    >
      <Container width={'210px'}>
        <Img placeholderImage={logoImgLogin} width={'100%'} />
      </Container>

      <SocialMedia />

      <hr />

      <Phone />

      <hr />
    </Styles>
  )
}
export default LoginRight

const Styles = styled(Container)`
  ${({ theme }) => css`
    hr {
      width: 250px;
      margin: 5px 0;
      height: 3px;
      background-color: #e5e7eb;
    }

    @media ${theme.device.desktopS} {
      hr {
        width: 100%;
        margin: 7px 0;
        height: 2px;
      }
    }
    @media ${theme.device.desktopL} {
      hr {
        width: 80%;
      }
    }
  `}
`
