module.exports = {
  siteMetadata: {
      title: 'Joshua Palacios',
  },
  plugins: [
   {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
   `gatsby-plugin-react-helmet`,
   `gatsby-transformer-sharp`,
   `gatsby-plugin-sharp`
   ],
};
