import React from 'react'
import Text from 'components/Text'

export default function LabelError (props) {
  return (
    <Text
      component='label'
      color='danger'
      size='10px'
      {...props}
    />
  )
}
