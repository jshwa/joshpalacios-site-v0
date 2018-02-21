import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Nav from '../components/Header/Nav'

const TemplateWrapper = props => (
  <div>
    <Helmet
      title="Josh Palacios"
      meta={[
        { name: 'description', content: 'Sample' }
      ]}
    />
    { props.location.pathname === '/' ? '' : <Nav />}
    <div>
      {props.children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
