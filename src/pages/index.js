import React from 'react';
import Link, { navigateTo } from 'gatsby-link';
import '../css/index.css';
import styles from '../css/home.module.css';
import HeroImg from '../components/HeroImage';
import Img from 'gatsby-image';

class IndexPage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {in: true}
   }

   exit = () => {
      this.setState({in:false})
      setTimeout(() => {navigateTo('/debate/')}, 2000)
      
   }

   render() {
      return (
         <div className={styles.container} >
            <div className={styles.link} onClick={this.exit}>
              ACADEMIC DEBATE COACH
            </div>
            <HeroImg in={this.state.in} image={this.props.data.logo.sizes} />
            <div className={styles.link}>
               <Link to="/dev/">FULL STACK WEB DEVELOPER</Link>
            </div>
         </div>
      )
   }
}

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