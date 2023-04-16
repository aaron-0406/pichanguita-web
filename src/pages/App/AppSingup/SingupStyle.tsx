import styled, { css } from 'styled-components'
import Container from '../../../ui/Container'

export const StyledContainerSingup = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    width: 60vw;
    min-width: 300px;
    max-width: 500px;
    height: 90vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5vh auto;
    background-color: ${theme.colors.Neutral3};

    @media ${theme.device.tabletL} {
      width: 55vw;
    }
    @media ${theme.device.desktopS} {
      width: 40vw;
    }
  `}
`
