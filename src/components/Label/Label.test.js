import React from 'react'
import { shallow } from 'enzyme'
import Label from '.'

it('renders without crashing', () => {
  shallow(
    <Label>Lorem ipsum</Label>
  )
})
