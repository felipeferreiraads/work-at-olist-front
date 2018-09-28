import React from 'react'
import { shallow } from 'enzyme'
import StyleguideWrapper from '.'

it('renders without crashing', () => {
  shallow(<StyleguideWrapper />)
})
