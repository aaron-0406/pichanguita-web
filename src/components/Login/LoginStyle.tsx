import styled, { css } from 'styled-components'
import Container from '../../ui/Container'

export const StyledContainerLogin = styled(Container)`
  ${({ theme }) => css`
    @media (max-width: 600px) {
      .active {
        display: none;
      }
      .login-right {
        width: 70%;
        background-color: #ebf6fc;
      }
    }
    @media (max-width: 800px) {
      .login-right {
        width: 50%;
      }
      .login-left {
        width: 45%;
      }
    }
  `}
`
