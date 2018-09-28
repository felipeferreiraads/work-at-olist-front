import React from 'react'
import Logo from 'components/Logo'
import Text from 'components/Text'
import FormRegister from 'forms/FormRegister'
import { Container } from './styles'

export default function BoxLogin () {
  return (
    <Container>
      <Logo />
      <Text
        size='12px'
        color='primary'
        style={{ fontWeight: 'bold' }}
      >
        Seja bem vindo
      </Text>
      <FormRegister
        onSubmit={data => console.log(data)}
      />
    </Container>
  )
}
