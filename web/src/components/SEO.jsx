import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {/* <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" /> */}
      {children}
    </>
  )
}
// function SEO({ title, description }) {
//   const { site } = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           description
//           title
//         }
//       }
//     }
//   `);

//   const seo = {
//     title: title
//       ? `${title} - ${site.siteMetadata.title}`
//       : site.siteMetadata.title,
//     description: description || site.siteMetadata.description,
//   };
//   return (
//     <Helmet>
//       <title>{seo.title}</title>
//       <meta name="description" content={seo.description} />
//       <link
//         rel="apple-touch-icon"
//         sizes="180x180"
//         href="/apple-touch-icon.png"
//       />
//       <link
//         rel="icon"
//         type="image/png"
//         sizes="32x32"
//         href="/favicon-32x32.png"
//       />
//       <link
//         rel="icon"
//         type="image/png"
//         sizes="16x16"
//         href="/favicon-16x16.png"
//       />
//       <link rel="manifest" href="/site.webmanifest" />
//       <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#648480" />
//       <meta name="msapplication-TileColor" content="#648480" />
//       <meta name="theme-color" content="#ffffff" />
//     </Helmet>
//   );
// }

// export default SEO;
