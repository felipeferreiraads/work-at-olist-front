import styled from 'styled-components'
import { prop } from 'styled-tools'
import { darken } from 'polished'
import colorProp from 'utils/colorProp'

export const StyledButton = styled.button`
  width: 100%;
  height: 30px;
  background-color: ${colorProp('color')};
  cursor: pointer;
  border: none;
  font-family: ${prop('theme.fonts.secondary')};
  color: ${prop('theme.colors.white')};
  transition: .2s;

  &:not([disabled]):hover,
  &:not([disabled]):active {
    background-color: ${colorProp('color', darken(0.07))}
  }

  &[disabled] {
    opacity: 0.7;
  }
`
