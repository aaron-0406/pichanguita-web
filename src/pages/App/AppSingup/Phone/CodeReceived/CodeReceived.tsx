import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

import { useState, useRef } from 'react'

import Container from '../../../../../ui/Container'
import TextField from '../../../../../ui/fields/TextField'
import Button from '../../../../../ui/Button/Button'
import Text from '../../../../../ui/Text'

const CodeReceived = () => {
  const refTextOne = useRef<HTMLInputElement>(null)
  const refTextTwo = useRef<HTMLInputElement>(null)
  const refTextThree = useRef<HTMLInputElement>(null)
  const refTextFour = useRef<HTMLInputElement>(null)
  const refBtn = useRef<HTMLButtonElement>(null)

  const [load, setLoad] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [helperTxt, setHelperTxt] = useState('')

  const veref = () => {
    let value = `${refTextOne.current?.value}${refTextTwo.current?.value}${refTextThree.current?.value}${refTextFour.current?.value}`
    if (value.length === 4 && /^[0-9]*$/.test(value)) {
      setDisabled(false)
    } else {
      setHelperTxt("Debe ingresar un valor numérico")
      setDisabled(true)
    }
  }

  const changueText = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length === 1) {
      let value = e.currentTarget.value,
        num = /^[0-9]*$/

      let ref = e.currentTarget.classList[2]

      if (!num.test(value)) {
        e.currentTarget.parentElement?.classList.add('warning-default')
        setDisabled(true)
      } else {
        switch (ref) {
          case 'warning':
            refTextTwo.current?.focus()
            break
          case 'warning1':
            refTextThree.current?.focus()
            break
          case 'warning2':
            refTextFour.current?.focus()
            break
          case 'warning3':
            refTextFour.current?.blur()
            break
        }
        setHelperTxt("")
        e.currentTarget.parentElement?.classList.remove('warning-default')
      }
      veref()
    }
  }

  return (
    <Styles
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      width="75%"
      height="80%"
    >
      <Container display="flex" justifyContent="space-around" width="100%">
        <TextField
          onChange={(e) => {
            changueText(e)
          }}
          maxLength={1}
          forwardedRef={refTextOne}
          className="warning"
          size="xl"
          width="20%"
          helperText={helperTxt}
        />
        <TextField
          onChange={(e) => {
            changueText(e)
          }}
          maxLength={1}
          forwardedRef={refTextTwo}
          className="warning1"
          size="xl"
          width="20%"
        />
        <TextField
          onChange={(e) => {
            changueText(e)
          }}
          maxLength={1}
          forwardedRef={refTextThree}
          className="warning2"
          size="xl"
          width="20%"
        />
        <TextField
          onChange={(e) => {
            changueText(e)
          }}
          maxLength={1}
          forwardedRef={refTextFour}
          className="warning3"
          size="xl"
          width="20%"
        />
      </Container>
      <Button
        forwardedRef={refBtn}
        disabled={disabled}
        margin="20px 0 5px"
        size="small"
        loading={load}
        label="Enviar"
        width="70%"
        onClick={() => {
          setLoad(true)
        }}
      />
      <StylesLinks>
        <NavLink to="">
          <Text.Body size="s" weight="regular" color="Link">
            Reenviar Código
          </Text.Body>
        </NavLink>
      </StylesLinks>
    </Styles>
  )
}

export default CodeReceived

const Styles = styled(Container)`
  input {
    text-align: center;
  }
  ${({ theme }) => css`
    .warning-default {
      padding: 0;
      color: ${theme.colors.Danger5};
      background: ${theme.colors.Danger1};
      border: 2px solid ${theme.colors.Danger5};
    }
  `}
`

const StylesLinks = styled(Container)`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
