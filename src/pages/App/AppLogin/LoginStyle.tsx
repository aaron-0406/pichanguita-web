import styled, { css } from 'styled-components'
import Container from '../../../ui/Container'

export const StyledContainerLogin = styled(Container)`
  ${({ theme }) => css`
    .login-right {
      background-color: ${theme.colors.Neutral3};
    }

    @media ${theme.device.tabletS} {
      .active {
        display: flex;
      }
      .login-right {
        width: 50%;
        background-color: ${theme.colors.Neutral0};
      }
      .login-left {
        width: 45%;
      }
    }
    @media ${theme.device.tabletL} {
      .login-right {
        width: 45%;
      }
      .login-left {
        width: 35%;
      }
    }
  `}
`
