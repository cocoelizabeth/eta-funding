import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";
import { CriteriaListsStyles } from "../../styles/childCare/CriteriaListsStyles";
import MyPortableText from "../MyPortableText";
import Button from "../buttons/Button";
import TextBlockCTAItem from "../homepage/TextBlockCTAItem";

function CriteriaLists() {
  const data = useStaticQuery(graphql`
    {
      allSanityChildCare {
        nodes {
          criteriaListsContent {
            sectionHeading
            list1 {
              _key
              headerText
              _rawSubText
            }
            list2 {
              _key
              headerText
              _rawSubText
            }
            list3 {
              _key
              headerText
              _rawSubText
            }

          }
        }
      }
    }
  `);

  const content = data?.allSanityChildCare?.nodes[0]?.criteriaListsContent ?? {};

  
  // const contentBlocks = [
  //   content.list1,
  //   content.list2,
  //   content.list3,
  //   content.list4,
  // ];
  // const contentBlockItems = contentBlocks.map((item) => (
  //   <TextBlockCTAItem
  //     headerText={item.headerText}
  //     _rawSubText={item._rawSubText}
  //     _key={item._key}
  //   />
  // ));

  return (
    <CriteriaListsStyles>
      <section className="sectionHeadingContainer">
        <div className="headlineText h2">{content?.sectionHeading ?? "Default Section Heading"}</div>
      </section>
      <section>

        <div className="criteriaListContainer">
          <div className="categoryTitle h2">{content?.list1?.headerText ?? "Default Header"}</div>
          <div className="criteriaListText">
            <MyPortableText value={content?.list1?._rawSubText ?? ""} />
          </div>
        </div>
        <div className="criteriaListContainer">
          <div className="categoryTitle h2">{content?.list2?.headerText ?? "Default Header"}</div>
          <div className="criteriaListText">
            <MyPortableText value={content?.list2?._rawSubText ?? ""} />
          </div>
        </div>
          <div className="criteriaListContainer">
          <div className="categoryTitle h2">{content?.list3?.headerText ?? "Default Header"}</div>
          <div className="criteriaListText">
            <MyPortableText value={content?.list3?._rawSubText ?? ""} />
          </div>
        </div>

      </section>
    </CriteriaListsStyles>
  );
}

export default CriteriaLists;
