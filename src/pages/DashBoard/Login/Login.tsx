import { NavLink } from 'react-router-dom'

import { StyledContainerLogin } from '../../../components/Login/LoginStyle'
import Container from '../../../ui/Container'
import Img from '../../../ui/Img'
import Button from '../../../ui/Button'
import Text from '../../../ui/Text'

import jugadorImg from '../../../shared/assets/img/loginJugador.png'
import logoImgLogin from '../../../shared/assets/img/pichanguita.png'

const Login = () => {
  return (
    <StyledContainerLogin
      width={'100vw'}
      height={'100vh'}
      display={'flex'}
      justifyContent="space-around"
      alignItems="center"
    >
      <Container
        className={'active'}
        width={'48%'}
        height={'90%'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'end'}
        // backgroundColor={'#EBF6FC'}
      >
        <Container width={'80%'} minWidth={'300px'} maxWidth={'350px'}>
          <Img placeholderImage={jugadorImg} width={'100%'} />
        </Container>
        <Button label={'Crear Cuenta'} size="small" width="200px"></Button>
        <Container
          width={'70%'}
          maxWidth={'500px'}
          minWidth={'250px'}
          height={'20px'}
          display={'flex'}
          margin={'0 20px 0'}
          marginTop={'15%'}
          alignItems={'end'}
          justifyContent={'space-between'}
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
        </Container>
      </Container>
      <Container
        width={'48%'}
        height={'90%'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        backgroundColor={'#EBF6FC'}
      >
        <Container
          width={"210px"}
        >
          <Img placeholderImage={logoImgLogin} width={'100%'} />
        </Container>
        <Container
        width={"250px"}
        height={"100px"}
        display='flex'
        flexDirection="column"
        justifyContent='space-around'
        >
          <Button label="continuar con facebook" size='small' shape='pill'></Button>
          <Button label= "continuar con google" size='small' shape='pill'></Button>
        </Container>
      </Container>
    </StyledContainerLogin>
  )
}

export default Login
