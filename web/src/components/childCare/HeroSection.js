import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import MyPortableText from "../MyPortableText";
import Button from "../buttons/Button";
import HeroSectionTemplate from "../templates/HeroSectionTemplate";

function HeroSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityChildCare {
        nodes {
          hero {
            headerText
            _rawSubText
          }
        }
      }
    }
  `);

  const { hero } = data.allSanityChildCare.nodes[0];

  return (
    
    // <HeroSectionStyles>
    //   <section>
    //     <div className="hero__wrapper">
    //       <div className="headlineText h2">{hero.headerText}</div>
    //       <div className="subheadingText">
    //         <MyPortableText className="criteraList" value={hero._rawSubText} />
    //         {/* <Button to={hero.link} tag={Link} className="heroCTA">
    //           {hero.cta}
    //         </Button> */}
    //       </div>
    //     </div>
    //   </section>
    // </HeroSectionStyles>
    <HeroSectionTemplate heading={hero.headerText} subheading={hero._rawSubText}/>
  );
}

export default HeroSection;
