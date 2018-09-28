import React from 'react'
import PropTypes from 'prop-types'
import { componentType } from 'types'
import { TextStyled } from './styles'

export default function Text (props) {
  return <TextStyled {...props} />
}

Text.propTypes = {
  /** Component */
  component: componentType,

  /** Text align */
  align: PropTypes.string,

  /** Size */
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /** Line height */
  lineHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /** Font family from theme */
  font: PropTypes.string,

  /** Text color */
  color: PropTypes.string
}

Text.defaultProps = {
  component: 'p',
  size: '16px',
  font: 'primary',
  color: 'text',
  lineHeight: '1',
  align: 'inherit'
}
