import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import DebateNav from '../components/Header/DebateNav';
import styles from '../css/debate.module.css';
import SlideInFromLeft from '../components/animations/SlideInFromLeft';
import SlideInFromRight from '../components/animations/SlideInFromRight';

const DebatePage = ({ data }) => (
   <div className={styles.container} >
      <div className={styles.left_panel} >
         <DebateNav />
         <div className={styles.fname} >
            <SlideInFromLeft timeout={200}> Joshua </SlideInFromLeft>
         </div>
         <div className={styles.lname}>
            <SlideInFromLeft> Palacios </SlideInFromLeft>
         </div>
         <div className={styles.title}>
            <SlideInFromLeft timeout={600}> ACADEMIC DEBATE COACH </SlideInFromLeft>
         </div>
      </div>
      <div className={styles.image_div} >
         <SlideInFromRight timeout={700}>
            <Link to="/"><Img sizes={data.hero.sizes} className={styles.image} imgStyle={{"object-position": "right center"}}/></Link>
         </SlideInFromRight>
      </div>
   </div>
)

export default DebatePage

export const query = graphql`
  query heroImageQuery {
    hero: imageSharp(id: { regex: "/JoshLogoPartial.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_noBase64
      }
    }
   }
`;
