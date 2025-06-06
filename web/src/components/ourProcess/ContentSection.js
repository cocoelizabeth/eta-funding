import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";
import { ContentSectionStyles } from "../../styles/ourProcess/ContentSectionStyles";
import MyPortableText from "../MyPortableText";


function ContentSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityOurProcess {
        nodes {
          steps {
            step1 {
              _rawHeadlineTextCustom
              _rawSubText
            }
            step2 {
              _rawHeadlineTextCustom
              _rawSubText
            }
            step3 {
              _rawHeadlineTextCustom
              _rawSubText
            }
            step4 {
              _rawHeadlineTextCustom
              _rawSubText
            }
            step5 {
              _rawHeadlineTextCustom
              _rawSubText
            }
          }
        }
      }
    }
  `);

  const stepsData = data?.allSanityOurProcess?.nodes[0]?.steps ?? {};
  const stepArray = Object.keys(stepsData) || {};

  const steps = stepArray.map((step, i) => (
    <div className={`font-bold text-${i+1}`}>
      <div className="headerText">{step?._rawHeadlineTextCustom ?? "Default Header"}</div>
      <div className="subText">
        <MyPortableText value={step?._rawSubText ?? ""} />
      </div>
    </div>
  ));

  return (
    <ContentSectionStyles>
      <section>
        <div className="timelineGrid">
          <div className="item-1">
            <div className="headerText">{stepsData?.step1?._rawHeadlineTextCustom ?? "Default Header"}</div>
            <div className="subText">
              <MyPortableText value={stepsData?.step1?._rawSubText ?? "Default Subtext"} />
            </div>
          </div>
          <div className="item-2"></div>
          <div className="item-3">
            <div className="headerText">{stepsData?.step3?._rawHeadlineTextCustom ?? "Default Header"}</div>
            <div className="subText">
              <MyPortableText value={stepsData?.step3?._rawSubText ?? "Default Subtext"} />
            </div>
          </div>
          <div className="item-4"></div>
          <div className="item-5">
            <div className="headerText">{stepsData?.step5?._rawHeadlineTextCustom ?? "Default Header"}</div>
            <div className="subText">
              <MyPortableText value={stepsData?.step5?._rawSubText ?? "Default Subtext"} />
            </div>
          </div>{" "}
          <div className="item-6">
            <div className="line"></div>
            <div className="circleContainer">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
          <div class="item-7"></div>
          <div className="item-8">
            <div className="headerText teal">{stepsData?.step2?._rawHeadlineTextCustom ?? "Default Header"}</div>
            <div className="subText teal">
              <MyPortableText value={stepsData?.step2?._rawSubText ?? "Default Subtext"} />
            </div>
          </div>
          <div class="item-9"></div>
          <div className="item-10">
            <div className="headerText ">{stepsData?.step4?._rawHeadlineTextCustom ?? "Default Header"}</div>
            <div className="subText ">
              <MyPortableText value={stepsData?.step4?._rawSubText ?? "Default Subtext"} />
            </div>
          </div>
          <div class="item-11"></div>
        </div>
      </section>
    </ContentSectionStyles>
  );
}

export default ContentSection;

