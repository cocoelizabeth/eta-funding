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
              _rawHeadlineTextCustom
              _rawSubText
            }
            list2 {
              _key
              _rawHeadlineTextCustom
              _rawSubText
            }
            list3 {
              _key
              _rawHeadlineTextCustom
              _rawSubText
            }

          }
        }
      }
    }
  `);

  const content = data.allSanityWhatWeLookFor.nodes[0].contentSection;

  
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
      <section>
        <div className="criteriaListContainer">
          <div className="categoryTitle h2">
            <MyPortableText value={content.list1._rawHeadlineTextCustom}/>
          </div>
          <div className="criteriaListText">
            <MyPortableText value={content.list1._rawSubText} />
          </div>
        </div>
        <div className="criteriaListContainer">
          <div className="categoryTitle h2">
            <MyPortableText value={content.list2._rawHeadlineTextCustom}/>
          </div>
          <div className="criteriaListText">
            <MyPortableText value={content.list2._rawSubText} />
          </div>
        </div>
          <div className="criteriaListContainer">
          <div className="categoryTitle h2">
            <MyPortableText value={content.list3._rawHeadlineTextCustom}/>
          </div>
          <div className="criteriaListText">
            <MyPortableText value={content.list3._rawSubText} />
          </div>
        </div>

      </section>
    </CriteriaListsStyles>
  );
}

export default CriteriaLists;
