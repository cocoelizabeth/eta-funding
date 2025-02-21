import React from "react";
import { HeroSectionTemplateStyles } from "../../styles/templates/HeroSectionTemplateStyles";
import MyPortableText from "../MyPortableText";
function HeroSectionTemplate({ heading, subheading }) {
  return (
    <HeroSectionTemplateStyles>
      <section>
        <div className="hero__wrapper">
    
          <div className="headlineText h2">
            <MyPortableText className="headlineText h2" value={heading} />
          </div>
          
          <div className="subheadingText">
            <MyPortableText className="criteraList" value={subheading} />
          </div>
        </div>
      </section>
    </HeroSectionTemplateStyles>
  );
}

export default HeroSectionTemplate;
