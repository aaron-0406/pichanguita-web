import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

import Container from '../../../ui/Container'
import Img from '../../../ui/Img'
import Button from '../../../ui/Button'
import Text from '../../../ui/Text'

import jugadorImg from '../../../shared/assets/img/loginJugador.png'

const LoginLeft = () => {
  return (
    <Container
      className="active login-left"
      width="35%"
      height="90%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Container width="80%" minWidth="300px" maxWidth="350px">
        <Img placeholderImage={jugadorImg} width="100%" />
      </Container>
      <Button label="Crear Cuenta" size="small" width="250px"></Button>
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
    </Container>
  )
}

export default LoginLeft

const StylesLinks = styled(Container)`
  ${({ theme }) => css`
    @media ${theme.device.desktopS} {
      left: 20px;
    }
  `}
`
