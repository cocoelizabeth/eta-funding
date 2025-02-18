import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { HeroSectionStyles } from "../../styles/whoWeAre/HeroSectionStyles";
import MyPortableText from "../MyPortableText";
import Button from "../buttons/Button";

function HeroSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityWhoWeAre {
        nodes {
          seo {
            title
            slug {
              current
            }
          }
        }
       }
      }
  `);

  const { seo } = data.allSanityWhoWeAre.nodes[0];

  return (
    <HeroSectionStyles>
      <section>
        <div className="hero__wrapper">
          <div className="headlineText h2">{seo.title}</div>
        </div>
      </section>
    </HeroSectionStyles>
  );
}

export default HeroSection;
