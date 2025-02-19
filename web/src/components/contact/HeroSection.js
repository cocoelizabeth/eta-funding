import React, { useRef, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { HeroSectionStyles } from "../../styles/contact/HeroSectionStyles";
import MyPortableText from "../MyPortableText";
import Button from "../buttons/Button";
import { socialLinks } from "../../constants/socialLinks";

function HeroSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityHome {
        nodes {
          contact {
            headerText
            _rawSubText
            link
            cta
            _key
          }
        }
      }
    }
  `);

  const { contact } = data.allSanityHome.nodes[0];

  return (
    <HeroSectionStyles>
      <section>
        <div className="hero__wrapper">
          <div className="headlineText h2">{contact?.headerText ?? "Default Header"}</div>
          <div className="subheadingText">
            <div className="subheadingText">
              <MyPortableText
                className="subheadingText"
                value={contact._rawSubText}
              />
            </div>

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
