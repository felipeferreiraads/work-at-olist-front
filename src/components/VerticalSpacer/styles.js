import styled from 'styled-components'
import View from 'components/View'
import responsiveProp from 'utils/responsiveProp'

export const Spacer = styled(View.filter(['spacing']))`
  ${responsiveProp('spacing', value => `
    > * + * {
      margin-top: ${value}px !important;
    }
  `)}
`
