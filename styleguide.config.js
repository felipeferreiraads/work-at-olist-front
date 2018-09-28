const path = require('path')

module.exports = {
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/components/StyleguideWrapper')
  },
  sections: [
    {
      name: 'Introduction',
      content: 'docs/intro.md'
    },
    {
      name: 'Components',
      components: 'src/components/**/*.js'
    },
    {
      name: 'Forms',
      components: 'src/forms/**/*.js'
    }
  ],
  theme: {
    maxWidth: 2000
  }
}
