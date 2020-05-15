module.exports = {
	siteMetadata: {
		title: 'Mon site personnel',
		author: 'Stephane Van Pe',
		description: 'Site personnel de présentation',
		siteUrl: `https://stephane-van-pe.netlify.com`,
	},
	plugins: [
		'gatsby-plugin-react-helmet',

		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// replace "UA-XXXXXXXXX-X" with your own Tracking ID
				trackingId: 'G-SNN3ES0MS3',
				head: true,
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
		`gatsby-plugin-sitemap`,
	],
};
