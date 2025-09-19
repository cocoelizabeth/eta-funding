import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";
import { ContentSectionStyles } from "../../styles/whoWeAre/ContentSectionStyles";
import MyPortableText from "../MyPortableText";
import { GatsbyImage } from 'gatsby-plugin-image';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";


function ContentSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityWhoWeAre {
        nodes {
          headshotImage {
            alt
            asset {
              gatsbyImageData
            }
          }
          title
          name
          email
          linkedInUrl
          about {
            _rawSubText
            _rawHeadlineTextCustom
          }
          seo {
            title
            slug {
              current
            }
            description
          }
          capitalPartners {
            _rawHeadlineTextCustom
            _rawSubText
          }
        }
      }
    }
  `);
    
  const content = data.allSanityWhoWeAre.nodes[0];
  const headshotImage = {
    imageData: content.headshotImage.asset.gatsbyImageData,
    altText: content.headshotImage.alt,
    title: content.title,
    name: content.name,
  };
  const linkedInUrl = content.linkedInUrl;
  const email = "mailto:".concat(content.email);
  const about = {
    title: content.about._rawHeadlineTextCustom,
    body: content.about._rawSubText,
  }
  const capitalPartners = {
    title: content.capitalPartners._rawHeadlineTextCustom,
    body: content.capitalPartners._rawSubText,
  }
  


  return (
    <ContentSectionStyles>
      <section>
        <div className="introContainer">
          <div className="headshotContainer">
            {/* <h2>{headshotImage.title}</h2> */}
            <div className="imageContainer">
              <GatsbyImage
                image={headshotImage.imageData}
                alt={headshotImage.altText}
                className="img"
              />
            </div>
            <div className="sectionTitle">
              <h2>{headshotImage.name}</h2>
              <h5>{headshotImage.title}</h5>
            </div>
            <ul className="whoWeAre__iconsList">
              {/* {socialLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.url}>{item.icon}</a>
                </li>
              ))} */}
              <li key="LinkedIn">
                <a href={linkedInUrl}>{<FaLinkedin />}</a>
              </li>
              <li key="Email">
                <a href={email}>{<MdEmail />}</a>
              </li>
            </ul>
          </div>

          <div className="aboutContainer">
            {/* <div className="h5">{about.title}</div> */}
            <div className="about body">
              <MyPortableText value={about.body} />
            </div>
          </div>
        </div>
        
        <div className="capitalPartnersContainer">
          <div className="sectionTitle">
            <h2><MyPortableText className="criteraList" value={capitalPartners.title} /></h2>
          </div>
          <div className="aboutContainer">
            <div className="about body">
              <MyPortableText value={capitalPartners.body} />
            </div>
          </div>
        </div>

        {/* <h1>{content.capitalPartners.headerText}</h1> */}

        {/* <div className="criteriaListContainer">
          <div className="categoryTitle h2">{content.list1.headerText}</div>
          <div className="criteriaListText">
            <MyPortableText value={content.list1._rawSubText} />
          </div>
        </div>
        <div className="criteriaListContainer">
          <div className="categoryTitle h2">{content.list2.headerText}</div>
          <div className="criteriaListText">
            <MyPortableText value={content.list2._rawSubText} />
          </div>
        </div>
          <div className="criteriaListContainer">
          <div className="categoryTitle h2">{content.list3.headerText}</div>
          <div className="criteriaListText">
            <MyPortableText value={content.list3._rawSubText} />
          </div>
        </div> */}
      </section>
    </ContentSectionStyles>
  );
}

export default ContentSection;
