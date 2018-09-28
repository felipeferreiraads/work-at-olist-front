import React from 'react'
import { withTheme } from 'styled-components'
import VerticalSpacer from 'components/VerticalSpacer'
import Label from 'components/Label'
import Input from 'components/Input'
import {  Bars, Bar, Validations, Text } from './styles'

class Password extends React.Component {
  state = {
    validSize: false,
    validUppercase: false,
    validNumber: false,
    numValidation: 0,
    size: 0
  }

  colors = {
    0: this.props.theme.colors.border,
    1: this.props.theme.colors.danger,
    2: this.props.theme.colors.warning,
    3: this.props.theme.colors.success
  }

  valid = e => {
    this.setState({
      validSize: e.target.value.length >= 6,
      validUppercase: /(.*[A-Z].*)/.test(e.target.value),
      validNumber: /(.*\d.*)/.test(e.target.value),
      size: e.target.value.length
    })

    const numValidation = Object.values(this.state).reduce((number, value) => {
      let increment = number
      if(value)
        increment++

      return increment
    }, 0)

    this.setState({ numValidation: numValidation - 2 })
  }

  render() {
    return (
      <VerticalSpacer spacing={10}>
        <Label>
          Senha
        </Label>
        <Input
          type='password'
          onKeyUp={e => this.valid(e)}
          border={this.colors[this.state.numValidation] > 0 ? this.colors[this.state.numValidation] : this.colors[0]}
          {...this.props}
        />
        <Bars>
          <Bar
            color={this.colors[this.state.numValidation]}
            valid={this.state.numValidation > 0}
          />
          <Bar
            color={this.colors[this.state.numValidation]}
            valid={this.state.numValidation > 1}
          />
          <Bar
            color={this.colors[this.state.numValidation]}
            valid={this.state.numValidation > 2}
          />
        </Bars>
        <Validations>
          <Text
            valid={this.state.validSize}
            initial={this.state.size === 0}
          >
            Pelo menos 6 caracteres
          </Text>
          <Text
            valid={this.state.validUppercase}
            initial={this.state.size === 0}
          >
            Pelo menos 1 letra maiúscula
          </Text>
          <Text
            valid={this.state.validNumber}
            initial={this.state.size === 0}
          >
            Pelo menos 1 número
          </Text>
        </Validations>
      </VerticalSpacer>
    )
  }
}

export default withTheme(Password)