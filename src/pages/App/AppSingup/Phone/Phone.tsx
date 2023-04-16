import Container from '../../../../ui/Container'
import Text from '../../../../ui/Text'
import TextField from '../../../../ui/fields/TextField'

import { useMediaQuery } from '../../../../shared/hooks/useMediaQuery'
import { device } from '../../../../shared/breakpoints/reponsive'

const Phone = () => {
  const greaterThanDesktopS = useMediaQuery(device.desktopS)

  return (
    <Container
      display="flex"
      width="90%"
      height="100px"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      marginTop="5%"
    >
      <Text.Title size={!greaterThanDesktopS ? 's' : 'm'} weight="regular">
        Número Telefónico
      </Text.Title>
      <TextField
        size={!greaterThanDesktopS ? 's' : 'xl'}
        width="75%"
        placeholder="Ingrese su número"
        leadingIcon="ri-map-2-fill"
        prefix="+51 "
      />
    </Container>
  )
}

export default Phone
