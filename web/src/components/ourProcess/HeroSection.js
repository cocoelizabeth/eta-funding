import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { HeroSectionStyles } from "../../styles/ourProcess/HeroSectionStyles";
import HeroSectionTemplate from "../templates/HeroSectionTemplate";


function HeroSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityOurProcess {
        nodes {
          hero {
            _rawHeadlineTextCustom
            _rawSubText
          }
        }
       }
      }
  `);

  const hero = data?.allSanityOurProcess?.nodes[0] ?? {};

  return (
    <HeroSectionTemplate
      heading={hero?._rawHeadlineTextCustom ?? "Default Header"}
      subheading={hero?._rawSubText ?? "Default subtext"}
    />
  );
}

export default HeroSection;
