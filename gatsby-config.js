module.exports = {
  siteMetadata: {
    title: `Video Computing Group at UC Riverside`,
    description: `The Video Computing Group at the University of California, Riverside conducts research on the foundations and applications of computer vision, image processing, and statistical learning from images/videos.`,
    author: `@johnphamous`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Video Computing Group`,
        short_name: `VCG`,
        start_url: `/`,
        background_color: `#234674`,
        theme_color: `#234674`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    }
  ]
};
