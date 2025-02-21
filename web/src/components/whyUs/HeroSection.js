import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { HeroSectionStyles } from '../../styles/whyUs/HeroSectionStyles';
import HeroSectionTemplate from '../templates/HeroSectionTemplate'
function HeroSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityWhyUs {
        nodes {
          hero {
            _rawHeadlineTextCustom
            _rawSubText
          }
        }
      }
    }
  `);

  const { hero } = data.allSanityWhyUs.nodes[0];

  return (
    <HeroSectionTemplate
      heading={hero._rawHeadlineTextCustom}
      subheading={hero._rawSubText}
    />
  );
}

export default HeroSection;
