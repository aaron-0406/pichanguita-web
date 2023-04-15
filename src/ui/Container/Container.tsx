import type CSS from 'csstype'
import styled, { css } from 'styled-components'

const OPACITY_1 = 1
const OPACITY_0_8 = 0.8

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  display?: CSS.Property.Display
  alignSelf?: CSS.Property.AlignSelf
  alignItems?: CSS.Property.AlignItems
  justifyContent?: CSS.Property.JustifyContent
  justifyItems?: CSS.Property.JustifyItems
  justifySelf?: CSS.Property.JustifySelf
  textAlign?: CSS.Property.TextAlign
  position?: CSS.Property.Position
  top?: CSS.Property.Top
  bottom?: CSS.Property.Bottom
  left?: CSS.Property.Left
  right?: CSS.Property.Right
  centered?: boolean
  fullScreen?: boolean
  minHeight?: CSS.Property.MinHeight
  minWidth?: CSS.Property.MinWidth
  maxHeight?: CSS.Property.MaxHeight
  maxWidth?: CSS.Property.MaxWidth
  height?: CSS.Property.Height
  width?: CSS.Property.Width
  flexDirection?: CSS.Property.FlexDirection
  padding?: CSS.Property.Padding
  marginTop?: CSS.Property.MarginTop
  margin?: CSS.Property.Margin
  flexWrap?: CSS.Property.FlexWrap
  gap?: CSS.Property.Gap
  readonly?: boolean
  pointerEvents?: CSS.Property.PointerEvents
  overFlowX?: CSS.Property.OverflowX
  overFlowY?: CSS.Property.OverflowY
  cursor?: CSS.Property.Cursor
  backgroundColor?: CSS.Property.BackgroundColor
}

const Container: React.FC<ContainerProps> = (props) => {
  return <StyledContainer {...props} />
}

export default Container

export const StyledContainer = styled.div<ContainerProps>`
  ${({ centered, fullScreen }) =>
    !!centered &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      ${!!fullScreen &&
      css`
        min-height: 70vh;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      `}
    `}

  ${({ pointerEvents }) =>
    !!pointerEvents &&
    css`
      pointer-events: ${pointerEvents};
    `}

  ${({ readonly }) => css`
    pointer-events: ${readonly ? 'none' : 'auto'};
    opacity: ${readonly ? OPACITY_0_8 : OPACITY_1};
  `}

  ${({ display }) =>
    !!display &&
    css`
      display: ${display};
    `}

  ${({ padding }) =>
    !!padding &&
    css`
      padding: ${padding};
    `}
    
  ${({ margin }) =>
    !!margin &&
    css`
      margin: ${margin};
    `}

  ${({ marginTop }) =>
    !!marginTop &&
    css`
      margin-top: ${marginTop};
    `}

  ${({ alignItems }) =>
    !!alignItems &&
    css`
      align-items: ${alignItems};
    `}

  ${({ alignSelf }) =>
    !!alignSelf &&
    css`
      align-self: ${alignSelf};
    `}

  ${({ justifyContent }) =>
    !!justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}

  ${({ justifySelf }) =>
    !!justifySelf &&
    css`
      justify-self: ${justifySelf};
    `}

  ${({ justifyItems }) =>
    !!justifyItems &&
    css`
      justify-items: ${justifyItems};
    `}

  ${({ textAlign }) =>
    !!textAlign &&
    css`
      text-align: ${textAlign};
    `}
    
  ${({ position }) =>
    !!position &&
    css`
      position: ${position};
    `}
  ${({ top }) =>
    !!top &&
    css`
      top: ${top};
    `}

  ${({ bottom }) =>
    !!bottom &&
    css`
      bottom: ${bottom};
    `}

  ${({ left }) =>
    !!left &&
    css`
      left: ${left};
    `}

  ${({ right }) =>
    !!right &&
    css`
      right: ${right};
    `}

  ${({ minHeight }) =>
    !!minHeight &&
    css`
      min-height: ${minHeight};
    `}

    ${({ minWidth }) =>
    !!minWidth &&
    css`
      min-width: ${minWidth};
    `}

    ${({ maxHeight }) =>
    !!maxHeight &&
    css`
      max-height: ${maxHeight};
    `}

    ${({ maxWidth }) =>
    !!maxWidth &&
    css`
      max-width: ${maxWidth};
    `}

  ${({ flexDirection }) =>
    !!flexDirection &&
    css`
      flex-direction: ${flexDirection};
    `}

    ${({ flexWrap }) =>
    !!flexWrap &&
    css`
      flex-wrap: ${flexWrap};
    `}
      
  ${({ gap }) =>
    !!gap &&
    css`
      gap: ${gap};
    `}

    ${({ width }) =>
    !!width &&
    css`
      width: ${width};
    `}

    ${({ overFlowX }) =>
    !!overFlowX &&
    css`
      overflow-x: ${overFlowX};
    `}
    
    ${({ overFlowY }) =>
    !!overFlowY &&
    css`
      overflow-y: ${overFlowY};
    `}
    
    ${({ cursor }) =>
    !!cursor &&
    css`
      cursor: ${cursor};
    `}
      
    ${({ height }) =>
    !!height &&
    css`
      height: ${height};
    `}

    ${({ backgroundColor }) =>
    !!backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
`
