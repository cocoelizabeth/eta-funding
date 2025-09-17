import styled from 'styled-components';

export const SingleBlogStyles = styled.div`
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
    font-weight: 700;
    letter-spacing: 1px;
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
    line-height: var(--blog-font-size-h1);
    font-size: var(--blog-font-size-h1);
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
    /* margin-bottom: 0.5rem; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--racoma-light);
        font-size: var(--font-size-small);

    svg {
      height: 20px;
      width: 20px;
      display: none;
    }
    a {
      font-size: var(--font-size-small);
  
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

    .h2 {
      font-size: var(--blog-font-size-h2);
    }

    .h3 {
      font-size: var(--blog-font-size-h3);
      font-weight: 700;
      line-height: var(--blog-font-size-h3);
      margin-bottom: 1.5rem;
      u {
        /* text-decoration: none;
        padding-bottom: 5px;
        border-bottom: 1px solid var(--racoma-light); */
      }
    }
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
                    padding: 0 0 1.5rem 2rem;
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
        padding: 0 0 1.5rem 2rem;
        strong {
          /* text-transform: uppercase; */
        }
      }
      li:before {
        font-weight: var(--font-weight-bold);
        padding-right: 2.5rem;
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

  @media only screen and (min-width: 480px) {

  }
   @media only screen and (min-width: 1024px) {
    .blog-header {
      flex-direction: row;
      align-items: flex-start;
    }
    .h1 {
      font-size: var(--blog-font-size-h1);
      
    }

    .left {
      max-width: 30%;
      width: 30%;
      min-width: 30%;
      padding-right: var(--grid-gutter);
      position: sticky;
      top: calc(var(--header-height) + var(--page-intro-small));
      height: calc(100vh - var(--header-height) - var(--page-intro-small) - var(--page-intro-small) - 11px);
    }
    .body {
      width: 70%;
      padding-right: var(--grid-gutter);
      padding-left: calc(var(--grid-gutter) * 4);
      padding-top: 0;
      ol {
        li {
                  padding: 0 0 2rem 2.5rem;
        }
      }
      ul {
                li {
                  padding: 0 0 2rem 2.5rem;
        }
      }

    }
  }
`;
