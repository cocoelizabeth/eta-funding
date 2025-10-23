import styled from 'styled-components';

export const CategoryPageStyles = styled.div`
  padding-top: var(--page-intro-small);
  padding-bottom: var(--page-section);
  .blog-header {
    display: flex;
    flex-direction: column;
  }
  .breadcrumbs {
    text-transform: uppercase;
    display: flex;
    width: 100%;
    margin-bottom: var(--page-intro-small);
    font-size: 10px;
    a {
      text-decoration: var(--link-text-decoration);
      text-underline-offset: var(--link-underline-offset);
      cursor: pointer;
    }
    .separator {
      padding-right: 10px;
      padding-left: 10px;
    }
  }
  .left {
    ${
      "" /* max-width: 30%;
    width: 30%;
    min-width: 30%;
    padding-right: var(--grid-gutter); */
    }
  }
  .body {
    p {
      margin-bottom: 2rem;
    }
  }
  .title {
    ${"" /* width: 50%; */}
    /* text-transform: uppercase; */
    padding-bottom: 2rem;
  }

  .h1:before {
    content: "●";
    margin-right: 10px;
  }

  .publishedAt {
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--racoma-light);
    text-transform: uppercase;
  }
  .categoriesText,
  .author,
  .publishedAt {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--racoma-light);
    svg {
      height: 20px;
      width: 20px;
      display: none;
      min-height: 20px;
      min-width: 20px;
    }
    a {
      /* font-size: var(--font-size-small);
   */
      text-transform: uppercase;
      text-decoration: var(--link-text-decoration);
      text-underline-offset: var(--link-underline-offset);
      &:hover {
        text-decoration: var(--link-text-decoration);
        text-underline-offset: var(--link-underline-offset);
        color: var(--racoma-navy);
      }
    }
  }


  
  .body {
    padding-top: var(--page-intro-small);
    a {
        text-decoration: var(--link-text-decoration);
        text-underline-offset: var(--link-underline-offset);
        &:hover {
        text-decoration: var(--link-text-decoration);
        text-underline-offset: var(--link-underline-offset);
        color: var(--racoma-navy);
      }
   
      }

      ol {
        counter-reset: css-counter;

          li {
            counter-increment: css-counter;
          }

          li::before {
              content: counter(css-counter) ".";
          }
      }

      ul > li:before {
        content: "•";

      }

    

     li {
        position: relative;
        overflow: hidden;
        padding: 0 0 1.5rem 1.5rem;
        strong {
          /* text-transform: uppercase; */
        }
      }
      li:before {
        font-weight: var(--font-weight-bold);
        padding-right: 20px;
        height: 100%;
        position: absolute;
        left: 0;
      }
  }
  ${
    "" /* .hr {
    margin: 2rem 0;
    color: var(--gray);
  } */
  }
  ${
    "" /* .body {
    margin-top: 2rem;
    h1,
    h2,
    h3,
    h4 {
      margin: 1rem 0;
    }
    .bodyImage {
      margin: 2rem 0;
    }
    .bodyCode {
      margin: 2rem 0;
      font-size: 2rem;
    } */
  }

  .h2 {
    margin-bottom: 2rem;
    padding-top: 3rem;
  }
   @media only screen and (min-width: 720px) {
    .blog-header {
      flex-direction: row;
    }
    .h1 {
      font-size: var(--font-size-h2);
    }
    .left {
      max-width: 30%;
      width: 30%;
      min-width: 30%;
      padding-right: var(--grid-gutter);
    }
    .body {
      width: 70%;
      padding-right: var(--grid-gutter);
      padding-left: calc(var(--grid-gutter) * 4);
      padding-top: 0;


    }
  }
`;
