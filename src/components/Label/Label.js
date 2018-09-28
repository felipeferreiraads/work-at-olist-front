import React from 'react'
import Text from 'components/Text'

export default function Label (props) {
  return (
    <Text
      component='label'
      size='10px'
      color='text'
      {...props}
    />
  )
}
