import { useState } from 'react'

import Button from '../../../../ui/Button/Button'
import Container from '../../../../ui/Container'
import InputText from '../../../../ui/inputs/InputText'

import iconPeru from '../../../../shared/assets/icons/peru.png'

const Phone = () => {
  const [displayImage, setDisplayImage] = useState('none')

  return (
    <Container
      height="42px"
      width="300px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <InputText
        icon={iconPeru}
        numberCharacters={9}
        width="230px"
        visibleImage={displayImage}
        onClick={() => {
          setDisplayImage('block')
        }}
      />
      <Button label="➜" width="60px" size="small" shape="pill" />
    </Container>
  )
}

export default Phone
