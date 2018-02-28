import React from 'react';
import Link, { navigateTo } from 'gatsby-link';
import Img from 'gatsby-image';
import '../css/index.css';
import styles from '../css/home.module.css';
import HeroImg from '../components/HeroImage';
import Fade from '../components/animations/Fade';

class IndexPage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {in: true}
   }

   goToDebate = () => {
      this.setState({in:false})
      setTimeout(() => {navigateTo('/debate/')}, 2000)
      
   }

   goToDev = () => {
      this.setState({in:false})
      setTimeout(() => {navigateTo('/dev/')}, 2000)
   }

   render() {
      return (
         <div className={styles.container} >
            <div className={styles.link} onClick={this.goToDebate}>
               <Fade in={this.state.in}> ACADEMIC DEBATE COACH </Fade>
            </div>
            <HeroImg in={this.state.in} image={this.props.data.logo.sizes} />
            <div className={styles.link} onClick={this.goToDev}>
               <Fade in={this.state.in}> FULL STACK WEB DEVELOPER </Fade>
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