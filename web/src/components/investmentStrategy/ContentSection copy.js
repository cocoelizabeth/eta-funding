import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import { ContentSectionStyles } from '../../styles/investmentStrategy/ContentSectionStyles';
import MyPortableText from '../MyPortableText';
import Button from '../buttons/Button';
import TextBlockCTAItem from './TextBlockCTAItem';


function ContentSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityInvestmentStrategy {
        nodes {
          contentSection {
          _rawIntroText
            reason1 {
              _rawHeadlineTextCustom
              _rawSubText
              _key
            }
            reason2 {
              _rawHeadlineTextCustom
              _rawSubText
              _key
            }
            reason3 {
              _rawHeadlineTextCustom
              _rawSubText
              _key
            }
            reason4 {
              _rawHeadlineTextCustom
              _rawSubText
              _key
            }
          }
        }
      }
    }
  `);

  const content = data.allSanityInvestmentStrategy.nodes[0].contentSection;
  const contentBlocks = [
    content.reason1,
    content.reason2,
    content.reason3,
    content.reason4,
  ];
  const contentBlockItems = contentBlocks.map((item) => (
    <TextBlockCTAItem
      headerText={item._rawHeadlineTextCustom}
      _rawSubText={item._rawSubText}
      // cta={item.cta}
      // link={item.link}
      _key={item._key}
    />
  ));

  return (
    <ContentSectionStyles>
      <section>

        <div className="contentSection__introText h3">
          <MyPortableText value={content._rawIntroText} />
        </div>

        <div>
          <div className="contentSection__grid_row">
            <p className="contentSection_smallHeading">
              <strong className="reason-item-title reason-number-1">
                <MyPortableText value={content.reason1._rawHeadlineTextCustom}/>
              </strong>
            </p>
            <MyPortableText value={content.reason1._rawSubText} />

          {/* BLOCK 2 */}

          <p className="contentSection_smallHeading">
            <strong className="reason-item-title reason-number-2">
              <MyPortableText value={content.reason2._rawHeadlineTextCustom}/>
            </strong>
          </p>
          <MyPortableText value={content.reason2._rawSubText} />
        </div>

        <div className="contentSection__grid_row">
          <p className="contentSection_smallHeading">
            <strong className="reason-item-title reason-number-3">
              <MyPortableText value={content.reason3._rawHeadlineTextCustom}/>
            </strong>
          </p>
          <MyPortableText value={content.reason3._rawSubText} />
        
          {/* BLOCK 2 */}

          <p className="contentSection_smallHeading">
            <strong className="reason-item-title reason-number-4">
              <MyPortableText value={content.reason4._rawHeadlineTextCustom}/>
            </strong>
          </p>
          <MyPortableText value={content.reason4._rawSubText} />
        </div>

      </div>
        {/* <BlogGrid blogs={featuredBlogs} /> */}
      </section>
    </ContentSectionStyles>
  );
}

export default ContentSection;

