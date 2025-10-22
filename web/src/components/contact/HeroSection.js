import React, { useRef, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { HeroSectionStyles } from "../../styles/contact/HeroSectionStyles";
import MyPortableText from "../MyPortableText";
import Button from "../buttons/Button";
import { socialLinks } from "../../constants/socialLinks";

function HeroSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityContact {
        nodes {
          contact {
            _rawHeadlineTextCustom
            _rawSubText
          }
        }
      }
    }
  `);

  const textContent = data.allSanityContact.nodes[0].contact;

  return (
    <HeroSectionStyles>
      <section>
        <div className="hero__wrapper">
          <MyPortableText value={textContent._rawHeadlineTextCustom} />

          <div className="subheadingText">
     
              <MyPortableText
                value={textContent._rawSubText}
              />
            <ul className="contactLinks">
              {socialLinks.map((item) => (
                <li key={item?.name ?? ""}>
                  <a href={item?.url ?? ""}>{item?.text ?? ""}</a>
                </li>
              ))}
            </ul>

            {/* <span className="placeholder" /> */}
            {/* <Button to={hero.link} tag={Link} className="heroCTA">
              {hero.cta}
            </Button> */}
          </div>
        </div>
      </section>
    </HeroSectionStyles>
  );
}

export default HeroSection;
