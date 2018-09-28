const yargs = require('yargs')
const path = require('path')
const fs = require('fs-extra')

const srcDir = path.join(process.cwd(), 'src')

module.exports = yargs
  .command('component [name]', 'create a component', args => {
    yargs
      .positional('name', {
        describe: 'the component that will be created'
      })
      .option('dir', {
        describe: 'destination folder',
        default: 'components/'
      })
      .boolean('')
      .help()
  }, argv => createComponent(argv))
  .argv

function getIndexCode (name) {
  return `export { default } from './${name}'\n`
}

function getStatelessComponentCode (name) {
  return (
    `
import React from 'react'
import PropTypes from 'prop-types'

export default function ${name} (props) {
  return (
    <div>
      ${name}
    </div>
  )
}

${name}.propTypes = {

}
    `.trim() + '\n'
  )
}

function getTestCode (name) {
  return (
    `
import React from 'react'
import { shallow } from 'enzyme'
import ${name} from '.'

it('renders without crashing', () => {
  shallow(<${name} />)
})
    `.trim() + '\n'
  )
}

function getStylesCode () {
  return (
    `
import styled from 'styled-components'
    `.trim() + '\n'
  )
}

function getDocs (name) {
  return (
  `
\`\`\`
<${name} />
\`\`\`
  `.trim() + '\n'
  )
}

async function createComponent ({ name, dir }) {
  const dest = path.join(srcDir, dir, name)
  const join = filename => path.join(dest, filename)

  const files = {
    index: join('index.js'),
    component: join(`${name}.js`),
    test: join(`${name}.test.js`),
    styles: join('styles.js'),
    docs: join(`${name}.md`)
  }

  try {
    // create index.js
    await fs.outputFile(files.index, getIndexCode(name))

    // create {Component}.js
    await fs.outputFile(files.component, getStatelessComponentCode(name))

    // create {Component}.test.js
    await fs.outputFile(files.test, getTestCode(name))

    // create styles.js
    await fs.outputFile(files.styles, getStylesCode(name))

    // create {Component}.mdx
    await fs.outputFile(files.docs, getDocs(name))

    Object.values(files).forEach(file => {
      console.log('Created:', file)
    })
  } catch (e) {
    console.error(e)
  }
}
