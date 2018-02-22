import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const IndexPage = ({ data }) => (
   <div>
      <div>
         <Link to="/debate/">ACADEMIC DEBATE COACH</Link>
      </div>
      <div>
         <Img sizes={data.logo.sizes} />
      </div>
      <div>
         <Link to="/web/">FULL STACK WEB DEVELOPER</Link>
      </div>
   </div>
)

export default IndexPage

export const query = graphql`
  query GatsbyImageQuery {
    logo: imageSharp(id: { regex: "/JoshLogoCircle.png/"}) {
      sizes(maxWidth: 1080) {
       ...GatsbyImageSharpSizes
      }
    }
   }
`;
