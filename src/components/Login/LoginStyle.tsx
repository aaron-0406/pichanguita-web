import styled, { css } from 'styled-components'
import Container from '../../ui/Container'

export const StyledContainerLogin = styled(Container)`
  ${({ theme }) => css`
    @media ${theme.device.tabletS} {
      .active{
        display: none;
      }
    }
  `}
`
