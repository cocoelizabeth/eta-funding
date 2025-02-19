import React, { useRef, useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import MyPortableText from '../MyPortableText';
import Button from '../buttons/Button';

function HeroSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityHome {
        nodes {
          hero {
            headlineText
            _rawSubHeadlineText
            cta
            link
          }
        }
      }
    }
  `);

  const hero = data?.allSanityHome?.nodes?.[0]?.hero ?? {}; // Add fallback to prevent error


  return (
    <HeroSectionStyles>

      <section>
        <div className="hero__wrapper">
          <div className="headlineText h2">{hero.headlineText}</div>
          <div className="subheadingText">
            <MyPortableText
              className="subheadingText__text"
              value={hero._rawSubHeadlineText}
            />
            <span className="placeholder" />
            <Button to={hero.link} tag={Link} className="heroCTA">
              {hero.cta}
            </Button>
          </div>
        </div>

      </section>
    </HeroSectionStyles>
  );
}

export default HeroSection;
