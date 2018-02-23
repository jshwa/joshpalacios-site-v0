import React from 'react';
import Link from 'gatsby-link';
import styles from '../../css/nav.module.css';

const DevNav = () => (
   <div className={styles.nav} style={{'justify-self': 'end'}} >
      <ul>
         <li><Link to='/about/'>ABOUT</Link></li>
         <li><Link to='/about/'>PORTFOLIO</Link></li>
         <li><Link to='/about/'>SKILLS</Link></li>
         <li><Link to='/about/'>CONTACT</Link></li>
      </ul>
   </div>
)

export default DevNav
