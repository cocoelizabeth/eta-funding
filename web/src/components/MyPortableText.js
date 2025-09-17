import React from 'react';
import { PortableText } from '@portabletext/react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { getImage, getImageDimensions } from '@sanity/asset-utils';
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark';
import { GatsbyImage } from 'gatsby-plugin-image';
import ParagraphText from './typography/ParagraphText';
import { Title } from './typography/Title';
import sanityConfig from '../../sanity-config';
import { getSanityImageData } from '../utils/getSanityImageData';

const myPortableTextComponents = {
  block: {
    normal: ({ children }) => <ParagraphText>{children}</ParagraphText>,
    h1: ({ children }) => <Title>{children}</Title>,
    h2: ({ children }) => <h2 className="h2">{children}</h2>,
    h3: ({ children }) => <h3 className="h3">{children}</h3>,
    li: ({ children }) => <li>{children}</li>,
    ol: ({ children }) => <ol className="custom-ordered-list">{children}</ol>,
  },
  marks: {
    underline: ({ children }) => <u className="custom-underline">{children}</u>
  },
  types: {
    customCode: ({ value }) => (
      <SyntaxHighlighter
        style={theme}
        className="bodyCode"
        language={value.code.language}
      >
        {String(value.code.code).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ),
    customImage: ({ value }) => {
      const imageData = getImage(value.asset, sanityConfig).asset;
      const { width, height } = getImageDimensions(value);
      const image = {
        url: imageData.url,
        height,
        width,
      };

      const gatsbyImageData = getSanityImageData({
        image,
        layout: 'constrained',
      });

      return (
        <GatsbyImage
          image={gatsbyImageData}
          alt={value.alt}
          className="bodyImage"
        />
      );
    },
  },
};
function MyPortableText({ value }) {
  return <PortableText value={value} components={myPortableTextComponents} />;
}

export default MyPortableText;
