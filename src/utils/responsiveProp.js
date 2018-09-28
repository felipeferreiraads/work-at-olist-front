import { omit } from 'ramda'
import isObject from 'is-object'

export default (key, fn) => props => {
  const value = props[key]
  const { breakpoints } = props.theme

  if (isObject(value)) {
    const bps = Object.keys(omit(['default'], value))

    const styles = [
      fn(value.default, 'default', props),
      ...bps.map(bp => `
         @media (max-width: ${breakpoints[bp]}) {
          ${fn(value[bp], bp, props)}
         }
      `)
    ]

    return styles.join('')
  }

  return fn(value, 'default', props)
}
