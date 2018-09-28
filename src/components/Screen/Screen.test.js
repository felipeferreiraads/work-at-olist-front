import React from 'react'
import { shallow } from 'enzyme'
import Screen from '.'

it('renders without crashing', () => {
  shallow(
    <Screen title='page title'>
      page content
    </Screen>
  )
})
