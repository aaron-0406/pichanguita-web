import styled, { css } from 'styled-components'

import Container from '../../../../ui/Container'
import Button from '../../../../ui/Button'

const SocialMedia = () => {
  return (
    <Stytles width="320px" height="100px" display="flex" flexDirection="column" justifyContent="space-around">
      <Button
        leadingIcon="ri-facebook-circle-fill"
        weight="regular"
        label="continuar con facebook"
        size="small"
        shape="pill"
        className="btn-facebook"
      />
      <Button
        leadingIcon="ri-chrome-fill"
        weight="regular"
        label="continuar con google"
        size="small"
        shape="pill"
        className="btn-google"
      />
    </Stytles>
  )
}
export default SocialMedia

const Stytles = styled(Container)`
  ${({ theme }) => css`
    .btn-facebook {
      font-weight: 100;
      background-color: ${theme.colors.ColorFacebook};
      border: none;
      color: black;
      margin-bottom: 20px;
    }
    .btn-facebook div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .btn-facebook span {
      margin-left: 25px;
    }
    .btn-google div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 25px;
    }
    .btn-google {
      background-color: ${theme.colors.ColorGoogle};
      border: none;
      color: black;
    }
    @media ${theme.device.desktopS} {
      height: 130px;
      width: 70%;

      .btn-facebook {
        height: 50px;
      }
      .btn-facebook span {
        font-size: 20px;
      }
      .btn-google {
        height: 50px;
      }
      .btn-google span {
        font-size: 20px;
      }
    }
  `}
`
