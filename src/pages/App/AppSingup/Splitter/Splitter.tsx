import styled, { css } from 'styled-components'

import Container from '../../../../ui/Container'

const Splitter = () => {
  return (
    <Styles>
      <hr />
      <div>o</div>
    </Styles>
  )
}

export default Splitter

const Styles = styled(Container)`
  ${({ theme }) => css`
    width: 78%;
    margin-bottom: 5%;
    position: relative;
    div {
      display: flex;
      width: 70px;
      height: 30px;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: calc(50% - 15px);
      right: calc(50% - 35px);
      background-color: ${theme.colors.Neutral3};
      font-size: 20px;
    }
    hr {
      background-color: ${theme.colors.Neutral7};
      width: 100%;
      margin: 10px 0;
      height: 2px;
    }
  `}
`
