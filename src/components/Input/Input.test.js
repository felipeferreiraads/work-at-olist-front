import React from 'react'
import { shallow } from 'enzyme'
import Input from '.'

it('renders without crashing', () => {
  shallow(
    <Input />
  )
})
