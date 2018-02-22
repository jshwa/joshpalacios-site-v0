import React from 'react';
import Link from 'gatsby-link';
import styles from '../../css/nav.module.css';

const DebateNav = () => (
   <div className={styles.nav} >
      <ul>
         <li><Link to='/about/'>ABOUT</Link></li>
         <li><Link to='/about/'>CONTENTION 1</Link></li>
         <li><Link to='/about/'>COACHING</Link></li>
         <li><Link to='/about/'>CONTACT</Link></li>
      </ul>
   </div>
)

export default DebateNav
