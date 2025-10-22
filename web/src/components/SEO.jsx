import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export const SEO = ({
  seo = {},
  pathname = "",
  title,
  //allow ad-hoc overrides if needed
  canonicalUrl,
  noindex,
  children,
}) => {
  const {
    title: siteTitle,
    description: siteDescription,
    image: siteImage,
    siteUrl,
  } = useSiteMetadata(); // uses defaults from gatsby-config

  const resolved = {
    title: title || seo.metaTitle || siteTitle,
    description: seo.metaDescription || siteDescription,
    ogTitle: seo.ogTitle || seo.metaTitle || siteTitle,
    ogDescription: seo.ogDescription || seo.metaDescription || siteDescription,
    image:
      seo?.ogImage?.asset?.url ||
      (siteUrl && siteImage ? `${siteUrl}${siteImage}` : undefined),
    url:
      seo.canonicalUrl ||
      canonicalUrl ||
      (siteUrl ? `${siteUrl}${pathname || ""}` : undefined),
    noindex: typeof noindex === "boolean" ? noindex : !!seo.noindex,
    jsonLd: seo.jsonLd, // allow raw JSON-LD string from Sanity (optional)
  };

  
  return (
    <>
      {/* Basic */}
      <title> {resolved.title} </title>
      {resolved.description && (
        <meta name="description" content={resolved.description} />
      )}

      {/* Canonical */}
      {resolved.url && <link rel="canonical" href={resolved.url} />}

      {/* Robots */}
      {resolved.noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={resolved.ogTitle} />
      {resolved.ogDescription && (
        <meta property="og:description" content={resolved.ogDescription} />
      )}
      {resolved.url && <meta property="og:url" content={resolved.url} />}
      {resolved.image && <meta property="og:image" content={resolved.image} />}

      {/* Twitter (summary_large_image by default) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolved.ogTitle} />
      {resolved.ogDescription && (
        <meta name="twitter:description" content={resolved.ogDescription} />
      )}
      {resolved.image && <meta name="twitter:image" content={resolved.image} />}

      {/* Optional JSON-LD (string) */}
      {resolved.jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: resolved.jsonLd }}
        />
      )}

      {children}
    </>
  );
};

// export const SEO = ({ title, description, pathname, children }) => {

//   const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata()

//   const seo = {
//     title: title || defaultTitle,
//     description: description || defaultDescription,
//     image: `${siteUrl}${image}`,
//     url: `${siteUrl}${pathname || ``}`,
//   }

//   debugger

//   return (
//     <>
//       <title>{seo.title}</title>
//       <meta name="description" content={seo.description} />
//       <meta name="image" content={seo.image} />
//       {children}
//     </>
//   )
// }
