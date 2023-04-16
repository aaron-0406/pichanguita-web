import styled, { css } from 'styled-components'

import Button from '../../../../../ui/Button/Button'
import Container from '../../../../../ui/Container'
import TextField from '../../../../../ui/fields/TextField'

import { useMediaQuery } from '../../../../../shared/hooks/useMediaQuery'
import { device } from '../../../../../shared/breakpoints/reponsive'

const Phone = () => {
  const greaterThanDesktopS = useMediaQuery(device.desktopS)

  return (
    <Styles height="42px" width="300px" display="flex" justifyContent="space-between" alignItems="center">
      <TextField
        type="tel"
        leadingIcon="ri-map-2-fill"
        prefix="+51 "
        placeholder="Ingrese su número"
        width={!greaterThanDesktopS ? '230px' : '80%'}
        size={!greaterThanDesktopS ? 's' : 'xl'}
        className="text"
      />
      <Button label="➜" width="60px" size="small" shape="pill" />
    </Styles>
  )
}

export default Phone

const Styles = styled(Container)`
  ${({ theme }) => css`
    .text {
      text-align: center;
      letter-spacing: 5px;
    }
    @media ${theme.device.desktopS} {
      height: 60px;
      width: 70%;
    }
  `}
`
