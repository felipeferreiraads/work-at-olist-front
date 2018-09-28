import styled from 'styled-components'
import { prop } from 'styled-tools'
import View from 'components/View'
import responsiveProp from 'utils/responsiveProp'
import colorProp from 'utils/colorProp'

const Base = View.filter([
  'size',
  'align',
  'font',
  'color',
  'lineHeight'
])

export const TextStyled = styled(Base)`
  display: block;
  font-family: ${props => props.theme.fonts[props.font]};
  color: ${colorProp('color')};
  margin: 0;
  padding: 0;
  text-align: ${prop('align')};
  font-weight: 600;
  ${responsiveProp('lineHeight', value => `
    line-height: ${value};
  `)}
  ${responsiveProp('size', value => `
    font-size: ${value};
  `)}
`
