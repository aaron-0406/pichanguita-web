import styled, { css } from 'styled-components'

const App = () => {
  return <StyledContainer>Pichanguita</StyledContainer>
}

export default App

const StyledContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.Primary6};
  `}
`
