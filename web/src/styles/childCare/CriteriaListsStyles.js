import styled from "styled-components";

export const CriteriaListsStyles = styled.div`
  background-color: var(--racoma-light);
  color: var(--racoma-teal);
  padding-bottom: calc(var(--page-intro-small) - 2rem);
  width: 100%;

  .sectionHeadingContainer {
    padding-top: calc(var(--page-intro-small) * 2);
      
      .headlineText {
        padding-bottom: calc(var(--page-intro-small) / 2);
        text-transform: uppercase;
        width: 100%;
        font-size: 4rem;
        /* border-bottom: 1px solid var(--racoma-teal); */
      }
  
  }

  .criteriaListContainer {
    padding-top: 6rem;
    padding-bottom: 6rem;
    display: flex;
    flex-direction: column;
    border-top: 1px solid var(--racoma-teal);
    .categoryTitle {
      text-transform: uppercase;
      padding-bottom: 4rem;
    }
    .criteriaListText {
      font-size: var(--font-size-large);
      line-height: var(--line-height-large);
      letter-spacing: var(--letter-spacing-large);
      padding-right: var(--grid-padding);
      p {
        margin-bottom: 2rem;

        a {
          color: var(--racoma-teal);
          border-bottom: 1px solid var(--racoma-teal);
        }
        a:hover  {
          opacity: 50%;
        }

        ${
          "" /* ::before {
          content: "✓";
          margin-right: 1.5rem;
        } */
        }
      }
    }
    ul {
      display: table;
      li {
        margin-bottom: 2rem;
        counter-increment: foo;
        display: table-row;
        :before {
          content: counter(foo) ".";
          display: table-cell;
          text-align: right;
          content: "•";
          font-weight: var(--font-weight-bold);
          padding: 10px;
        }
      }
    }
  }

  .criteriaListContainer:first-of-type {
    border-top: none;
  }

  @media only screen and (min-width: 720px) {
    .criteriaListContainer {
      padding-top: 10.3rem;
      padding-bottom: 10.3rem;
      flex-direction: row;
      .categoryTitle,
      .criteriaListText {
        width: 50%;
      }
      .categoryTitle {
        padding-right: 6rem;
      }
    }
  }


  @media only screen and (min-width: 1024px) {
    .sectionHeadingContainer {
      .headlineText {
        font-size: 5.3vw;
        width: 50%;
        width: 100%;

      }
    }

  }



  @media only screen and (min-width: 1280px) {
    .criteriaListContainer {
      .categoryTitle {
        padding-right: 10.3rem;
      }
      .criteriaListText {
      }
    }
  }

  .contentSection__grid_row {
    grid-template-columns: 100%;
    p {
      margin-bottom: 2rem;
      strong {
        text-transform: uppercase;
      }
    }
    p:last-child,
    p p:lastchild {
      padding-bottom: 2rem;
    }

    .contentSection_smallHeading {
      padding-top: 4rem;
      border-bottom: 1px solid var(--racoma-teal);
      margin-right: calc(var(--grid-gutter) * 2);
    }
  }

  @media only screen and (min-width: 720px) {
    .contentSection__grid_row {
      display: grid;
      grid-template-columns: 25% 1fr 1fr;
      grid-template-areas:
        "heading1 heading2 heading3"
        "body1 body2 body3";

      ${
        "" /* grid-column-gap: calc(var(--grid-gutter) * 2);
      column-gap: calc(var(--grid-gutter) * 8); */
      }
      padding: calc(var(--grid-gutter) * 3);
      padding-left: 0;
      padding-right: 0;
      .contentSection_smallHeading {
        border-top: none;
        padding-top: 0px;
      }
      p {
        margin-bottom: 2rem;
        padding-right: calc(var(--grid-gutter) * 1);

        strong {
          font-weight: var(--font-weight-h5);
          font-size: var(--font-size-h5);
          line-height: var(--line-height-h5);
          letter-spacing: var(--letter-spacing-h5);
          text-transform: uppercase;
        }
        :first-child {
          grid-area: heading1;
          column: 1;
        }
        :nth-child(2) {
          grid-area: body1;
          column: 1;
          ${
            "" /* p::before {
            content: "✓ ";
            height: 10px;
            width: 10px;
          } */
          }
        }
        :nth-child(3) {
          grid-area: heading2;
          column: 2;
        }
        :nth-child(4) {
          grid-area: body2;
          column: 2;
        }
      }
    }
  }
`;