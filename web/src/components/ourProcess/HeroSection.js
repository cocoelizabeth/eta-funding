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
            headerText
            _rawSubText
          }
        }
       }
      }
  `);

  const hero = data?.allSanityOurProcess?.nodes[0] ?? {};

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
    <HeroSectionTemplate
      heading={hero?.headerText ?? "Default Header"}
      subheading={hero?._rawSubText ?? "Default subtext"}
    />
  );
}

export default HeroSection;
