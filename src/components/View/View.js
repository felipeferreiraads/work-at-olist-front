import React from 'react'
import { omit } from 'ramda'
import { componentFromProp } from 'recompose'
import { componentType } from 'types'

const ViewComponent = componentFromProp('component')

export default function View (props) {
  return <ViewComponent {...props} />
}

View.filter = restrictedProps =>
  props => <View {...omit(restrictedProps, props)} />

View.propTypes = {
  /** Component */
  component: componentType.isRequired
}

View.defaultProps = {
  component: 'div'
}
