import { useState } from 'react'

import Container from '../../../../ui/Container'
import Text from '../../../../ui/Text'
import Number from './Number'
import CodeReceived from './CodeReceived/CodeReceived'

import { useMediaQuery } from '../../../../shared/hooks/useMediaQuery'
import { device } from '../../../../shared/breakpoints/reponsive'

const Phone = () => {
  const greaterThanDesktopS = useMediaQuery(device.desktopS)

  const [changeComponent, setChangeComponent] = useState(true)

  return (
    <Container
      display="flex"
      width="90%"
      height={changeComponent === true ? '20%' : '35%'}
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      marginTop="3%"
    >
      <Text.Title size={!greaterThanDesktopS ? 's' : 'm'} weight="regular">
        {changeComponent === false ? 'Número Telefónico' : 'Código Recibido'}
      </Text.Title>
      {changeComponent ? (
        <Number setChangeComponent={setChangeComponent} />
      ) : (
        <CodeReceived />
      )}
    </Container>
  )
}

export default Phone
