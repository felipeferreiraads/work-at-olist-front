import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styles'

export default function Button ({color, ...props}) {
  return (
    <StyledButton color={color} {...props} />
  )
}

Button.propTypes ={
  /** Button's color */
  color: PropTypes.string.isRequired
}

Button.defaultProps = {
  color: 'primary'
}
