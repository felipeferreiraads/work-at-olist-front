import React from 'react'
import { shallow } from 'enzyme'
import LabelHelper from '.'

it('renders without crashing', () => {
  shallow(<LabelHelper>Error</LabelHelper>)
})
