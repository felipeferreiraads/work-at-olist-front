import React from 'react'
import { shallow } from 'enzyme'
import Logo from '.'

it('renders without crashing', () => {
  shallow(<Logo />)
})
