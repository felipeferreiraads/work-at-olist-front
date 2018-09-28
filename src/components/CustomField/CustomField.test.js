import React from 'react'
import { shallow } from 'enzyme'
import CustomField from '.'

it('renders without crashing', () => {
  shallow(
    <CustomField
      input={{}}
      meta={{}}
      placeholder='Digite algo'
      label='Nome do usuário'
      name='username'
    />
  )
})
