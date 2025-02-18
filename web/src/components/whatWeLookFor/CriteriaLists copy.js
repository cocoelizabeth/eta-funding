import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";
import { CriteriaListsStyles } from "../../styles/whatWeLookFor/CriteriaListsStyles";
import MyPortableText from "../MyPortableText";
import Button from "../buttons/Button";
import TextBlockCTAItem from "../homepage/TextBlockCTAItem";

function CriteriaLists() {
  const data = useStaticQuery(graphql`
    {
      allSanityWhatWeLookFor {
        nodes {
          contentSection {
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

  const content = data.allSanityWhatWeLookFor.nodes[0].contentSection;
  const contentBlocks = [
    content.list1,
    content.list2,
    content.list3,
  ];
  const contentBlockItems = contentBlocks.map((item) => (
    <TextBlockCTAItem
      headerText={item.headerText}
      _rawSubText={item._rawSubText}
      _key={item._key}
    />
  ));

  return (
    <CriteriaListsStyles>
      <section>
        {/* <div className="contentSection__grid">
          {contentBlockItems}
        </div> */}
        <div className="contentSection__grid_row">
          <p className="contentSection_smallHeading">
            <strong>{content.list1.headerText}</strong>
          </p>
          <p>
            <p>
              <MyPortableText value={content.list1._rawSubText} />
            </p>
          </p>

          <p className="contentSection_smallHeading">
            <strong>{content.list3.headerText}</strong>
          </p>
          <p>
            <MyPortableText value={content.list3._rawSubText} />
          </p>
          {/* BLOCK 2 */}


          {/* BLOCK 2 */}
          {/* 
          <p className="contentSection_smallHeading">
            <strong>{content.list2.headerText}</strong>
          </p>
          <p>
          <MyPortableText value={content.list2._rawSubText} />
          </p> */}
        </div>
        {/* <BlogGrid blogs={featuredBlogs} /> */}
      </section>
    </CriteriaListsStyles>
  );
}

export default CriteriaLists;
