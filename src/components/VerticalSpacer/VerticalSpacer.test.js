import React from 'react'
import { shallow } from 'enzyme'
import VerticalSpacer from '.'

it('renders without crashing', () => {
  shallow(
    <VerticalSpacer>
      <div>A</div>
      <div>B</div>
      <div>C</div>
    </VerticalSpacer>
  )
})
