import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { HeroSectionStyles } from "../../styles/investmentStrategy/HeroSectionStyles";
import HeroSectionTemplate from "../templates/HeroSectionTemplate";
function HeroSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityInvestmentStrategy {
        nodes {
          hero {
            _rawHeadlineTextCustom
            _rawSubText
          }
        }
      }
    }
  `);

  const { hero } = data.allSanityInvestmentStrategy.nodes[0];

  return (
    <HeroSectionTemplate
      heading={hero._rawHeadlineTextCustom}
      subheading={hero._rawSubText}
    />
  );
}

export default HeroSection;
