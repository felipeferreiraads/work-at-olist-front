import React from 'react'
import { shallow, render, mount } from 'enzyme'
import View from '.'

describe('<View />', () => {
  it('renders without crashing', () => {
    shallow(
      <View>a</View>
    )
  })

  it('renders a div as default', () => {
    const view = render(<View />)
    expect(view.is('div')).toBeTruthy()
  })

  it('renders a span', () => {
    const view = render(<View component='span' />)
    expect(view.is('span')).toBeTruthy()
  })

  it('renders a React component', () => {
    function CustomComponent (props) {
      return <h1 {...props} />
    }

    const view = mount(<View component={CustomComponent} />)
    expect(view.find(CustomComponent)).toHaveLength(1)
  })
})
