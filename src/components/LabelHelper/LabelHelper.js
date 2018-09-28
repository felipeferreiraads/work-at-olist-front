import React from 'react'
import Text from 'components/Text'

export default function LabelHelper ({ style, ...props }) {
  return (
    <Text
      component='label'
      color='grayText'
      size='14px'
      style={{ fontStyle: 'italic', ...style }}
      {...props}
    />
  )
}
