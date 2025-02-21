import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import { PhilosophySectionStyles } from '../../styles/childCare/PhilosophySectionStyles';
import MyPortableText from '../MyPortableText';
import Button from '../buttons/Button';
import HeroSectionTemplate from "../templates/HeroSectionTemplate";

function PhilosophySection() {
  const data = useStaticQuery(graphql`
    {
      allSanityChildCare {
        nodes {
            philosophy{
              _rawHeadlineTextCustom
              _rawSubText
            }
          }
        }
      }
    
  `);

  const philosophy = data?.allSanityChildCare?.nodes[0]?.philosophy ?? {};
 



  return (
    <PhilosophySectionStyles>
      <section>
        {/* <div className="contactSection__introText h3">
          <MyPortableText value={contact._rawSubText}></MyPortableText>
        </div> */}
        <div className="contactSection__wrapper">
          <div className="headingWrapper">
            <h2 className="h2">
              <MyPortableText value={philosophy._rawHeadlineTextCustom}/>
            </h2>
          </div>

          <div className="textWrapper">
            <MyPortableText
              value={philosophy._rawSubText}
              className="bodyText"
            ></MyPortableText>
            {/* <p className="contactSection__cta">
              <Button to={contact.link} tag={Link} variant="navyLight">
                {contact.cta}
              </Button>
            </p> */}
          </div>
        </div>
      </section>
    </PhilosophySectionStyles>
    // <HeroSectionTemplate heading={philosophy.headerText} subheading={philosophy._rawSubText}/>
  );

}

export default PhilosophySection;
