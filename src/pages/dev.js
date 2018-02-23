import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import DevNav from '../components/Header/DevNav';
import styles from '../css/dev.module.css';

const DevPage = ({ data }) => (
   <div className={styles.container} >
      <div className={styles.image_div} >
         <Link to="/"><Img sizes={data.hero.sizes} className={styles.image} imgStyle={{"object-position": "left center"}}/></Link>
      </div>
      <div className={styles.right_panel} >
         <DevNav />
         <div className={styles.fname} >
            Joshua
         </div>
         <div className={styles.lname}>
            Palacios
         </div>
         <div className={styles.title}>
            FULL STACK WEB DEVELOPER
         </div>
      </div>
   </div>
)

export default DevPage

export const query = graphql`
  query heroLeftImageQuery {
    hero: imageSharp(id: { regex: "/JoshHeroPartialL.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_noBase64
      }
    }
   }
`;
