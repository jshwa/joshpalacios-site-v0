import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styles from '../css/layout.module.css'

import Nav from '../components/Header/Nav'

const TemplateWrapper = props => (
  <div className={styles.container} >
    <Helmet
      title="Josh Palacios"
      meta={[
        { name: 'description', content: 'Sample' }
      ]}
    />
    { props.location.pathname === '/' ? '' : <Nav />}
    <div className={styles.container}>
      {props.children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
