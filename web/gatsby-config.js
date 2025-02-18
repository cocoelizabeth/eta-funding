require('dotenv').config('./.env');
const sanityConfig = require('./sanity-config');

/**
 * @type {import('gatsby').GatsbyConfig}
 */


module.exports = {
  siteMetadata: {
    title: `Racoma Strategies`,
    siteUrl: `https://racomastrategies.com`,
    description: `Racoma Strategies is a search fund focused on acquiring, operating, and growing a single high-potential small business.`,
    image:  '/favicon-32x32.png'
  },
  plugins: [
  {
    resolve: 'gatsby-source-sanity',
    options: {
      ...sanityConfig,
    }
  }, 
  "gatsby-plugin-image", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  "gatsby-plugin-styled-components", 
  // "gatsby-plugin-google-gtag", 
  "gatsby-plugin-sitemap", 
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, 
  "gatsby-plugin-mdx", 
  "gatsby-transformer-remark", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: "gatsby-plugin-web-font-loader",
    options: {
      typekit: {
        id: process.env.GATSBY_ADOBE_FONT_PROJECT_ID,
      },
    },
  },
  {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/,
          omitKeys: [
            'xmlnsDc',
            'xmlnsCc',
            'xmlnsRdf',
            'xmlnsSvg',
            'xmlnsSodipodi',
            'xmlnsInkscape',
          ],
        },
      },
    }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};