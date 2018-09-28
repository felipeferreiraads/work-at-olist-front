import React from 'react'
import { componentType } from 'types'
import { Container, InputStyled } from './styles'

export default function Input ({ meta, ...props }) {
  return (
    <Container>
      <InputStyled
        {...props}
      />
    </Container>
  )
}

Input.propTypes = {
  /** Component */
  component: componentType,
}

Input.defaultProps = {
  component: 'input'
}
