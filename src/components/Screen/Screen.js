import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Container } from './styles'

export default function Screen ({ title, children }) {
  return (
    <React.Fragment>
      <Helmet>
        <title>{title} - Polvo</title>
      </Helmet>
      <Container>
        {children}
      </Container>
    </React.Fragment>
  )
}

Screen.propTypes = {
  /** Page title */
  title: PropTypes.string.isRequired
}
