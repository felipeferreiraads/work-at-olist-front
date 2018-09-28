import React from 'react'
import PropTypes from 'prop-types'
import { componentType } from 'types'
import { Spacer } from './styles'

export default function VerticalSpacer (props) {
  return (
    <Spacer {...props} />
  )
}

VerticalSpacer.propTypes = {
  /** Component */
  component: componentType,

  /** Spacing */
  spacing: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ])
}

VerticalSpacer.defaultProps = {
  component: 'div',
  spacing: 25
}
