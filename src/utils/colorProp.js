import objectPath from 'object-path'

export default (key, transformer = value => value) => props => {
  return props[key].startsWith('#')
    ? transformer(props[key])
    : transformer(
      objectPath.get(props.theme.colors, props[key])
    )
}
