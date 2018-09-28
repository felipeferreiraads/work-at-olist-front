import React, { Component } from 'react'
import PropTypes from 'prop-types'
import nanoId from 'nanoid'
import VerticalSpacer from 'components/VerticalSpacer'
import Label from 'components/Label'
import LabelError from 'components/LabelError'
import LabelHelper from 'components/LabelHelper'
import Input from 'components/Input'
import { componentType } from 'types'

export default class CustomField extends Component {
  static propTypes = {
    /** Component */
    component: componentType,

    /** Overrides the default value from final-form */
    defaultValue: PropTypes.any,

    /** Component's label */
    label: PropTypes.string,

    /** Component's helper text */
    helper: PropTypes.string
  }

  static defaultProps = {
    component: Input,
    defaultValue: ''
  }

  id = nanoId()

  render () {
    const {
      component: Component,
      label,
      meta,
      input: { value: inputValue, ...input },
      componentProps,
      defaultValue,
      helper,
      ...rest
    } = this.props

    const value = inputValue || defaultValue

    return (
      <VerticalSpacer spacing={5}>
        {label && (
          <Label
            htmlFor={this.id}
            color={meta.active ? 'primary' : undefined}
            children={label}
          />
        )}
        <Component
          id={this.id}
          {...input}
          {...componentProps}
          {...rest}
          value={value}
          meta={meta}
        />
        {helper && (
          <LabelHelper htmlFor={this.id}>
            {helper}
          </LabelHelper>
        )}
        {(meta.touched && meta.error) && (
          <LabelError htmlFor={this.id}>
            {meta.error}
          </LabelError>
        )}
        {meta.submitError && meta.submitError.map((err, index) => (
          <LabelError key={index} htmlFor={this.id}>
            {err}
          </LabelError>
        ))}
      </VerticalSpacer>
    )
  }
}
