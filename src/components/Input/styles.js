import styled from 'styled-components'
import { prop } from 'styled-tools'
import View from 'components/View'

const Base = View.filter([
  'focused',
  'invalid',
  'valid'
])

export const Container = styled.div`
  position: relative;
`

export const InputStyled = styled(Base)`
  display: block;
  width: 100%;
  font-family: ${prop('theme.fonts.primary')};
  font-size: 14px;
  border: 1px solid ${prop('theme.colors.border')};
  border-radius: 2px;
  background-color: #fff;
  padding: 0 10px;
  height: 25px;
  color: ${prop('theme.colors.text')}

  &:focus {
    border-color: ${prop('theme.colors.primary')};
  }

  &[disabled] {
    cursor: not-allowed;
  }
`
