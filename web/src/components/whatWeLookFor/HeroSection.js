import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import MyPortableText from "../MyPortableText";
import Button from "../buttons/Button";
import HeroSectionTemplate from "../templates/HeroSectionTemplate";

function HeroSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityWhatWeLookFor {
        nodes {
          hero {
            _rawHeadlineTextCustom
            _rawSubText
          }
        }
      }
    }
  `);

  const { hero } = data.allSanityWhatWeLookFor.nodes[0];

  return (
    <HeroSectionTemplate heading={hero._rawHeadlineTextCustom} subheading={hero._rawSubText}/>
  );
}

export default HeroSection;
