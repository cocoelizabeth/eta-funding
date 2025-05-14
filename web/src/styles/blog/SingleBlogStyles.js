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
    }
    a {
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
      a {
        text-decoration: var(--link-text-decoration);
        text-underline-offset: var(--link-underline-offset);
      }
      ul > li:before {
        content: "•";
        margin-right: 5px;
      }
    }
  }
`;
