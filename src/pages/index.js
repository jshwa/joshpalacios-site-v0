import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import '../css/index.css';
import styles from '../css/home.module.css'

const IndexPage = ({ data }) => (
   <div className={styles.container} >
      <div className={styles.link}>
         <Link to="/debate/">ACADEMIC DEBATE COACH</Link>
      </div>
      <div className={styles.image} >
         <Img sizes={data.logo.sizes} />
      </div>
      <div className={styles.link}>
         <Link to="/dev/">FULL STACK WEB DEVELOPER</Link>
      </div>
   </div>
)

export default IndexPage

export const query = graphql`
  query GatsbyImageQuery {
    logo: imageSharp(id: { regex: "/JoshLogoCircle.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes_noBase64
      }
    }
   }
`;
