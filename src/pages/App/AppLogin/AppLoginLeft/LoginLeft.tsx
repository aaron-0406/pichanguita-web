import { Link, NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { useMediaQuery } from '../../../../shared/hooks/useMediaQuery'
import { device } from '../../../../shared/breakpoints/reponsive'

import Container from '../../../../ui/Container'
import Img from '../../../../ui/Img'
import Button from '../../../../ui/Button'
import Text from '../../../../ui/Text'

import jugadorImg from '../../../../shared/assets/img/loginJugador.png'

const LoginLeft = () => {
  const greaterThanDesktopS = useMediaQuery(device.desktopS)

  return (
    <Styles
      className="active login-left"
      width="35%"
      height="90%"
      display="none"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Container width={!greaterThanDesktopS ? '300px' : '400px'}>
        <Img placeholderImage={jugadorImg} width="100%" />
      </Container>
      <NavLink to="/app/registrarse" className="btn-registrar">
        <Text.Body size="l" weight="bold" color="Neutral0">
          Crear Cuenta
        </Text.Body>
      </NavLink>
      <StylesLinks
        width="200px"
        height="20px"
        display="flex"
        justifyContent="space-between"
        position="absolute"
        bottom="10px"
        left="calc(50% - 100px)"
      >
        <NavLink
          to={
            'https://ftu.trenes.com/proteccion.php?msclkid=d9c383ada3d61a7e44c6e79a8c7d4e36&utm_source=bing&utm_medium=cpc&utm_campaign=General%20Trenes%20-%20Espa%C3%B1ol%20-%20Latam&utm_term=trenes&utm_content=Grupo%20Anuncios%20General%20Trenes%20Din%C3%A1mico%20Espa%C3%B1ol%20LATAM'
          }
        >
          <Text.Body size="xs" weight="regular" color="Link">
            Privacidad
          </Text.Body>
        </NavLink>
        <NavLink to="https://conceptodefinicion.de/seguridad/">
          <Text.Body size="xs" weight="regular" color="Link">
            Seguridad
          </Text.Body>
        </NavLink>
        <NavLink to="https://www.claro.com.pe/contactanos/">
          <Text.Body size="xs" weight="regular" color="Link">
            Contáctanos
          </Text.Body>
        </NavLink>
      </StylesLinks>
    </Styles>
  )
}

export default LoginLeft

const Styles = styled(Container)`
  ${({ theme }) => css`
    .btn-registrar {
      width: 200px;
      height: 40px;
      border-radius: 25px;
      background-color: ${theme.colors.Primary4};
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media ${theme.device.desktopS} {
      .btn-registrar {
        width: 250px;
      }
    }
  `}
`

const StylesLinks = styled(Container)`
  ${({ theme }) => css`
    @media ${theme.device.desktopS} {
      left: 20px;
    }
  `}
`
