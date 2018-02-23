import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import DebateNav from '../components/Header/DebateNav';
import styles from '../css/debate.module.css';

const DebatePage = ({ data }) => (
   <div className={styles.container} >
      <div className={styles.left_panel} >
         <DebateNav />
         <div className={styles.fname} >
            Joshua
         </div>
         <div className={styles.lname}>
            Palacios
         </div>
         <div className={styles.title}>
            ACADEMIC DEBATE COACH
         </div>
      </div>
      <div className={styles.image_div} >
         <Img sizes={data.hero.sizes} className={styles.image} imgStyle={{"object-position": "right center"}}/>
      </div>
   </div>
)

export default DebatePage

export const query = graphql`
  query heroImageQuery {
    hero: imageSharp(id: { regex: "/JoshLogoPartial.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes
      }
    }
   }
`;
