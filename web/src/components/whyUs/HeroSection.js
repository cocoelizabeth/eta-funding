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
            headerText
            _rawSubText
          }
        }
      }
    }
  `);

  const { hero } = data.allSanityWhyUs.nodes[0];

  return (
    // <HeroSectionStyles>
    //   <section>
    //     <div className="hero__wrapper">
    //       <div className="headlineText h2">{hero.headerText}</div>
    //       <div className="subheadingText">
    //         <MyPortableText
    //           className="subheadingText__text"
    //           value={hero._rawSubText}
    //         />
    //         {/* <Button to={hero.link} tag={Link} className="heroCTA">
    //           {hero.cta}
    //         </Button> */}
    //       </div>
    //     </div>

    //   </section>
    // </HeroSectionStyles>
    <HeroSectionTemplate
      heading={hero.headerText}
      subheading={hero._rawSubText}
    />
  );
}

export default HeroSection;
