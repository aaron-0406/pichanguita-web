import styled, { css } from 'styled-components'

import Container from '../../../../ui/Container'
import Button from '../../../../ui/Button'

const SocialMedia = () => {
  return (
    <Stytles width={'300px'} height={'100px'} display="flex" flexDirection="column" justifyContent="space-around">
      <Button weight="regular" label="continuar con facebook" size="small" shape="pill" className="btn-facebook" />
      <Button weight="regular" label="continuar con google" size="small" shape="pill" className="btn-google" />
    </Stytles>
  )
}
export default SocialMedia

const Stytles = styled(Container)`
  ${({ theme }) => css`
    .btn-facebook {
      font-weight: 100;
      background-color: #0b86df;
      border: none;
      color: black;
    }
    .btn-google {
      background-color: #bfc5c7;
      border: none;
      color: black;
    }
    @media ${theme.device.desktopS} {
      .btn-facebook {
        height: 60px;
        margin-bottom: 10px;
      }
      .btn-google {
        height: 60px;
      }
    }
  `}
`
