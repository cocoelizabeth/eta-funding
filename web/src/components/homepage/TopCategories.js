import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles';
import { SectionTitle } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';
import CategoryGrid from '../category/CategoryGrid';

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          categories {
            id
            title
            _rawDescription
            slug {
              current
            }
            coverImage {
              alt
              asset {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);
  const { categories } = data.allSanityFeatured.nodes[0];

  return (
    <TopCategoriesStyles>
      <SectionTitle>Top Categories</SectionTitle>
      <ParagraphText className="info">Lorem Impsum sdjfald</ParagraphText>
      <CategoryGrid categories={categories} />
    </TopCategoriesStyles>
  );
}

export default TopCategories;
