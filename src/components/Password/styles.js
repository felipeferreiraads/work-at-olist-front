import styled from 'styled-components'
import { prop, ifProp } from 'styled-tools'

export const Bars = styled.div`
  display: flex;
`

export const Bar = styled.div`
  flex: 1;
  height: 5px;
  background-color: ${ifProp('valid', prop('color'), prop('theme.colors.gray'))};
  transition: .2s;

  &:not(:last-child) {
    margin-right: 5px;
  }
`

export const Validations = styled.ul`
  padding: 0;
  list-style-type: none;
`

export const Text = styled.li`
  font-size: 10px;
  color: ${prop('theme.colors.text')};
  font-family: ${prop('theme.fonts.primary')};
  font-weight: 600;

  &:not(:last-child){
    margin-bottom: 5px;
  }

  &::before {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 100%;
    background: ${ifProp('initial', prop('theme.colors.gray'), ifProp('valid', prop('theme.colors.success'), prop('theme.colors.danger')))};
    display: inline-block;
    margin: 0 6px 1px 0;
    transition: .2s;
  }
`
