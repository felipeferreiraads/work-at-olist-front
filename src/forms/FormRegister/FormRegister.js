import React from 'react'
import { Form, Field } from 'react-final-form'
import VerticalSpacer from 'components/VerticalSpacer'
import CustomField from 'components/CustomField'
import Password from 'components/Password'
import Button from 'components/Button'
import * as forms from 'utils/forms'

export default function FormRegister (props) {
  return (
    <Form {...props}>
      {({ handleSubmit, pristine, submitting, form }) => (
        <form onSubmit={handleSubmit}>
          <VerticalSpacer spacing={15}>
            <Field
              name='email'
              label='E-mail'
              component={CustomField}
              {...forms.emailRequired}
            />
            <Field
              name='password'
              label='Senha'
              component={Password}
              {...forms.passwordRequired}
            />
            <Field
              name='passwordConfirmation'
              label='Confirme sua senha'
              component={CustomField}
              {...forms.passwordRequired}
            />
            <Button disabled={pristine}>Cadastrar</Button>
          </VerticalSpacer>
        </form>
      )}
    </Form>
  )
}
