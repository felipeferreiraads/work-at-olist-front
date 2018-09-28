import React from 'react'
import { shallow } from 'enzyme'
import Text from '.'

it('renders without crashing', () => {
  shallow(
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid asperiores at corporis distinctio, dolore dolorum eaque facere impedit ipsum laudantium maiores nam, nobis non nostrum, quis similique voluptatibus voluptatum.
    </Text>
  )
})
