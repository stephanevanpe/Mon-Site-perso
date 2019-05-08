module.exports = {
  siteMetadata: {
    title: "React Theme - Dimension",
    author: "Original author Hunter Chang. Enhanced by AppSeed",
    description: "Dimension design by HTML5 UP, Coded by AppSeed",
    siteUrl: `https://react-themes-dimension.appseed.us`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-104843706-4',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
 // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-plugin-sitemap`    
  ],
}
