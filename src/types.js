import PropTypes from 'prop-types'

export const componentType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.func
])
