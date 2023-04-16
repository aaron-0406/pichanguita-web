import { StyledContainerSingup } from './SingupStyle'

import { useMediaQuery } from '../../../shared/hooks/useMediaQuery'
import { device } from '../../../shared/breakpoints/reponsive'

import Container from '../../../ui/Container'
import Img from '../../../ui/Img'
import Phone from './Phone'
import Splitter from './Splitter/'
import SocialMedia from './SocialMedia'

import logoPichanguita from '../../../shared/assets/img/pichanguita.png'

const AppSingup = () => {
  const greaterThanDesktopS = useMediaQuery(device.desktopS)

  return (
    <StyledContainerSingup>
      <Container width={!greaterThanDesktopS ? '250px' : '270px'}>
        <Img placeholderImage={logoPichanguita} width="100%" />
      </Container>

      <Phone />

      <Splitter />

      <SocialMedia />
    </StyledContainerSingup>
  )
}

export default AppSingup
