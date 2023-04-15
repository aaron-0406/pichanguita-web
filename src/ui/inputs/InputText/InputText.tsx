import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import Container from '../../Container'
import Icon from '../../Icon'
import type { InputProps } from '../Input/Input'
import Input from '../Input'
import type { InputSize } from '../Input/Input.interfaces'
import Text from '../../Text'
import Img from '../../Img'

type InputTextProps = InputProps & {
  visibleImage?: string
  icon?: string
  iconFocus?: string
  tooltipMessage?: string
  leadingIcon?: string
  trailingIcon?: string
  suffix?: ReactNode
  optional?: boolean
  hasError?: boolean
  width?: string
  onClear?: () => void
  onClickTrailingIcon?: () => void
  clearInput?: boolean
  numberCharacters?: number
}

const InputText = forwardRef(
  (
    props: InputTextProps,
    ref: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined
  ) => {
    const {
      width,
      suffix,
      visibleImage,
      icon,
      iconFocus,
      prefix,
      onClear,
      onClickTrailingIcon,
      disabled,
      leadingIcon,
      trailingIcon,
      numberCharacters,
      size = 's',
      hasError = false,
      clearInput = false,
      ...rest
    } = props

    return (
      <StyledInputWrapper
        $icon={icon}
        $size={size}
        $hasError={hasError}
        $disabled={disabled}
        $width={width}
        $iconFocus={iconFocus}
        $visibleImage={visibleImage}
      >
        {!!leadingIcon && (
          <Container
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="24px"
            height="24px"
            className="leading__icon"
          >
            <Icon size={20} remixClass={leadingIcon} />
          </Container>
        )}

        {!!icon && <Img placeholderImage={icon} width={'20%'} className="icon-image" />}

        {!!iconFocus && <Img placeholderImage={iconFocus} width={'20%'} className="icon-focus__image" />}

        {!!prefix && (
          <Text.Body size="m" weight="regular" className="prefix__text">
            {prefix}
          </Text.Body>
        )}

        <Input ref={ref} disabled={disabled} size={size} {...rest} />

        {!!suffix && (
          <Text.Body size="m" weight="regular" className="suffix__text">
            {suffix}
          </Text.Body>
        )}

        {!disabled && hasError ? (
          <div className="error__icon">
            <Icon size={20} remixClass="ri-error-warning-line" color="Danger5" />
          </div>
        ) : !disabled && clearInput && numberCharacters ? (
          <Icon
            className="icon__clear-input"
            size={20}
            remixClass="ri-close-circle-line"
            color="Neutral6"
            onClick={onClear}
          />
        ) : (
          !!trailingIcon && (
            <Container
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="24px"
              height="24px"
              className="trailing__icon"
            >
              <Icon size={20} remixClass={trailingIcon} onClick={onClickTrailingIcon} />
            </Container>
          )
        )}
      </StyledInputWrapper>
    )
  }
)

InputText.displayName = 'InputText'

export default InputText

const StyledInputWrapper = styled.div<{
  $icon?: string
  $disabled?: boolean
  $hasError?: boolean
  $size: InputSize
  $width?: string
  $iconFocus?: string
  $visibleImage?: string
}>`
  ${({ theme, $disabled, $hasError, $size, $width, $iconFocus, $visibleImage }) => css`
    display: flex;
    align-items: center;
    width: ${!!$width ? $width : 'auto'};
    height: ${$size === 's' ? '40px' : $size === 'l' ? '48px' : '50px'};
    color: ${theme.colors.Neutral6};
    background: ${theme.colors.Neutral0};
    border: 2px solid ${theme.colors.Neutral4};
    border-radius: 8px;
    padding: 8px 16px;
    gap: 8px;

    .icon__clear-input {
      cursor: pointer;
    }

    .leading__icon,
    .trailing__icon {
      i {
        color: ${theme.colors.Neutral6};
      }
    }

    .prefix__text,
    .suffix__text {
      color: ${theme.colors.Neutral6};
    }

    :hover {
      border: 2px solid ${theme.colors.Neutral5};
    }

    :focus-within {
      border: 2px solid ${theme.colors.Primary2};
    }
    .icon-image {
      display: ${$visibleImage};
    }

    .icon-focus__image {
      display: none;
    }

    ${$hasError &&
    css`
      background: ${theme.colors.Danger1};
      border: 2px solid ${theme.colors.Danger5};

      .leading__icon,
      .trailing__icon {
        color: ${theme.colors.Danger5};
      }

      :hover,
      :focus-within {
        border: 2px solid ${theme.colors.Danger5};
      }
    `}

    ${$iconFocus &&
    css`
      :focus-within {
        .icon-focus__image {
          display: block;
        }
      }
    `}

    ${$disabled &&
    css`
      color: ${theme.colors.Neutral5};
      background: ${theme.colors.Neutral3};
      border: 2px solid ${theme.colors.Neutral4};

      :hover {
        border: 2px solid ${theme.colors.Neutral4};
      }

      .prefix__text,
      .suffix__text {
        color: ${theme.colors.Neutral5};
      }

      .leading__icon,
      .trailing__icon {
        i {
          color: ${theme.colors.Neutral5};
        }
      }
    `}
  `}
`
