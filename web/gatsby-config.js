require('dotenv').config('./.env');
const sanityConfig = require('./sanity-config');

/**
 * @type {import('gatsby').GatsbyConfig}
 */


module.exports = {
  siteMetadata: {
    title: `ETA Funding`,
    siteUrl: `https://etafunding.com`,
    description: `Entrepreneurship Through Acquisition - Funding Partners`,
    image:  '/favicon-color-96x96.png'
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
      "icon": "src/images/favicon-color-96x96.png"
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
      google: {
        families: [
          "Inter",
        ]
      }
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