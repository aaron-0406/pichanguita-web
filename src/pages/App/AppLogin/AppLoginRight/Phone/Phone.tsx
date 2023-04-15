import styled, { css } from 'styled-components'
import { useState } from 'react'

import Button from '../../../../../ui/Button/Button'
import Container from '../../../../../ui/Container'
import TextField from '../../../../../ui/fields/TextField'

import { useMediaQuery } from '../../../../../shared/hooks/useMediaQuery'
import { device } from '../../../../../shared/breakpoints/reponsive'

import iconPeru from '../../../../../shared/assets/icons/peru.png'

const Phone = () => {
  const [displayImage, setDisplayImage] = useState('none')
  const greaterThanDesktopS = useMediaQuery(device.desktopS)

  const onHandleClick = () => {
    setDisplayImage('block')
  }

  return (
    <Styles height="42px" width="300px" display="flex" justifyContent="space-between" alignItems="center">
      <TextField
        type="tel"
        leadingIcon="ri-map-2-fill"
        prefix="+51 "
        placeholder="Ingrese su número"
        width={!greaterThanDesktopS ? '230px' : '80%'}
        onClick={onHandleClick}
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
