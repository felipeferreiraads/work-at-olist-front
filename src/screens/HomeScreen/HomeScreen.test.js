import React from 'react'
import { shallow } from 'enzyme'
import HomeScreen from '.'

it('renders without crashing', () => {
  shallow(<HomeScreen />)
})
