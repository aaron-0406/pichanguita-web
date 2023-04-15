import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

import { useMediaQuery } from '../../../../../shared/hooks/useMediaQuery'
import { device } from '../../../../../shared/breakpoints/reponsive'

import Container from '../../../../../ui/Container'
import Button from '../../../../../ui/Button'
import TextField from '../../../../../ui/fields/TextField'
import Text from '../../../../../ui/Text'

const EnterMail = () => {
  const greaterThanDesktopS = useMediaQuery(device.desktopS)

  return (
    <Styles
      display="flex"
      height="180px"
      width="300px"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
    >
      <TextField
        width="100%"
        placeholder="Tu correo"
        className="text-correo"
        type="email"
        size={!greaterThanDesktopS ? 's' : 'xl'}
      />
      <TextField
        width="100%"
        placeholder="Tu contraseña"
        className="text-contraseña"
        type="password"
        size={!greaterThanDesktopS ? 's' : 'xl'}
      />
      <StylesLinks>
        <NavLink to="">
          <Text.Body size="m" weight="regular" color="Link">
            ¿Olvidaste tu contraseña?
          </Text.Body>
        </NavLink>
      </StylesLinks>
      <Button size="small" label="continuar" width="200px" weight="regular" className="btn-continuar" />
    </Styles>
  )
}

export default EnterMail

const Styles = styled(Container)`
  ${({ theme }) => css`
    .btn-continuar {
      background-color: ${theme.colors.Secondary4};
      border: none;
    }
    @media ${theme.device.desktopS} {
      height: 200px;
      width: 70%;
      .btn-continuar {
        width: 220px;
      }
      .btn-continuar span {
        font-size: 20px;
      }
    }
  `}
`

const StylesLinks = styled(Container)`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`
