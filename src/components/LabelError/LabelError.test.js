import React from 'react'
import { shallow } from 'enzyme'
import LabelError from '.'

it('renders without crashing', () => {
  shallow(<LabelError>Error</LabelError>)
})
