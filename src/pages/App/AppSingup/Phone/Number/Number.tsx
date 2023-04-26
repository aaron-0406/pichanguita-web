import { useState } from 'react'
import styled from 'styled-components'

import Container from '../../../../../ui/Container'
import TextField from '../../../../../ui/fields/TextField'

interface NumberProps {
  setChangeComponent: React.Dispatch<React.SetStateAction<boolean>>
}

const Number = ({ setChangeComponent }: NumberProps) => {
  const [showButton, setShowButton] = useState('')
  const [letterSpacing, setLetterSpacing] = useState('')
  const [warning, setWarning] = useState(false)

  const verifyFirstNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value,
      target = e.currentTarget,
      war = false

    value.length >= 1 ? setLetterSpacing('letterSpacing') : setLetterSpacing('')

    if (value.length === 1) {
      if (value === '9') {
        target.setAttribute('maxLength', '9')
      } else {
        war = true
        target.setAttribute('maxLength', '1')
      }
    } else {
      war = false
    }

    return war
  }

  const changueText = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value,
      war,
      num = /^[0-9]*$/

    war = verifyFirstNumber(e)
    if (value.length === 1) {
      war ? setWarning(true) : setWarning(false)
    } else {
      num.test(value) ? setWarning(false) : setWarning(true)
      value.length === 9 ? setShowButton('ri-arrow-right-line') : setShowButton('')
    }
  }

  const handleClick = () => {
    setChangeComponent(false)
  }

  return (
    <Styles display="block" width="75%">
      <TextField
        hasError={warning}
        className={letterSpacing}
        maxLength={1}
        size={'xl'}
        width="100%"
        placeholder="Ingrese su número"
        leadingIcon="ri-map-2-fill"
        prefix="+51"
        trailingIcon={showButton}
        onClickTrailing={handleClick}
        onChange={(e) => {
          changueText(e)
        }}
      />
    </Styles>
  )
}

export default Number

const Styles = styled(Container)`
  input {
    text-align: center;
  }
  .letterSpacing {
    letter-spacing: 6px;
  }
  .ri-arrow-right-line{
    cursor: pointer;
  }
`
