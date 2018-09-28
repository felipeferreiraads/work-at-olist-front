import React from 'react'
import { shallow } from 'enzyme'
import GlobalStyles from '.'

it('renders without crashing', () => {
  shallow(<GlobalStyles />)
})
