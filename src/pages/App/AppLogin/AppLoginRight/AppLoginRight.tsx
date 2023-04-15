import styled, { css } from 'styled-components'

import Container from '../../../../ui/Container'
import Img from '../../../../ui/Img'

import { useMediaQuery } from '../../../../shared/hooks/useMediaQuery'
import { device } from '../../../../shared/breakpoints/reponsive'

import Phone from './Phone'
import SocialMedia from './SocialMedia'
import EnterMail from './EnterMail'

import logoImgLogin from '../../../../shared/assets/img/pichanguita.png'

const LoginRight = () => {
  const greaterThanDesktopS = useMediaQuery(device.desktopS)

  return (
    <Styles
      width="90%"
      height="90%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className="login-right"
    >
      <Container width={!greaterThanDesktopS ? '210px' : '250px'}>
        <Img placeholderImage={logoImgLogin} width="100%" />
      </Container>

      <SocialMedia />

      <hr />

      <Phone />

      <hr />

      <EnterMail />
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
    }
    @media ${theme.device.desktopS} {
      hr {
        width: 70%;
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
