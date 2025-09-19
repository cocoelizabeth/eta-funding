// import React from "react";
// import { Link, graphql, useStaticQuery } from "gatsby";
// import { HeroSectionStyles } from "../../styles/whoWeAre/HeroSectionStyles";
// import MyPortableText from "../MyPortableText";
// import Button from "../buttons/Button";

// function HeroSection() {
//   const data = useStaticQuery(graphql`
//     {
//       allSanityWhoWeAre {
//         nodes {
//           seo {
//             title
//             slug {
//               current
//             }
//           }
//         }
//        }
//       }
//   `);

//   const { seo } = data.allSanityWhoWeAre.nodes[0];

//   return (
//     <HeroSectionStyles>
//       <section>
//         <div className="hero__wrapper">
//           <div className="headlineText h2">{seo.title}</div>
//         </div>
//       </section>
//     </HeroSectionStyles>
//   );
// }

// export default HeroSection;


import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
// import { HeroSectionStyles } from "../../styles/investmentStrategy/HeroSectionStyles";
import { HeroSectionStyles } from "../../styles/whoWeAre/HeroSectionStyles";
import HeroSectionTemplate from "../templates/HeroSectionTemplate";
import MyPortableText from "../MyPortableText";

function HeroSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityWhoWeAre {
        nodes {
          hero {
            _rawHeadlineTextCustom
            _rawSubText
          }
        }
      }
    }
  `);

  const { hero } = data.allSanityWhoWeAre.nodes[0];

  return (
    // <HeroSectionTemplate
    //   heading={hero._rawHeadlineTextCustom}
    //   subheading={hero._rawSubText}
    // />

    <HeroSectionStyles>
      <section>
        <div className="hero__wrapper">
    
          <div className="headlineText h2">
            <MyPortableText className="headlineText h2" value={hero._rawHeadlineTextCustom} />
          </div>
          
          <div className="subheadingText">
            <MyPortableText className="criteraList" value={hero._rawSubText} />
          </div>
        </div>
      </section>
    </HeroSectionStyles>
  );
}

export default HeroSection;
