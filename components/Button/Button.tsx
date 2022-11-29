import { MouseEvent } from 'react'
import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/react'

export const COLOR = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DANGER: 'danger',
  WARNING: 'warning',
} as const

export type ColorType = typeof COLOR[keyof typeof COLOR]

export type Props = {
  children: string
  color?: ColorType
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export const getColors = (color?: ColorType): SerializedStyles => {
  switch (color) {
    case COLOR.PRIMARY:
      return css`
        background: #6d5dfc;
        color: #e4ebf5e6;
      `
    case COLOR.SECONDARY:
      return css`
        color: #5e5c64e6;
      `
    case COLOR.DANGER:
      return css`
        background: #dc3545e6;
        color: #e4ebf5e6;
      `
    case COLOR.WARNING:
      return css`
        background: #ffca2ce6;
        color: #5e5c64e6;
      `
    default:
      return css``
  }
}

export const Button = styled.button<Props>`
  all: unset;
  display: flex;
  justify-self: center;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-size: 1.6rem;
  width: 15rem;
  height: 4rem;
  border-radius: 1rem;
  transition: all 0.4s ease;
  ${({ color }) => getColors(color)}
  box-shadow: 0.5vmin 0.5vmin 1vmin #c8d0e7, -0.5vmin -0.5vmin 1vmin #ffffff;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    box-shadow: 0.5vmin 0.5vmin 1vmin #c8d0e7, -0.5vmin -0.5vmin 1vmin #ffffff;
  }
`
