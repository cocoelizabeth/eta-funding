import styled from 'styled-components';

export const FeaturedBlogsStyles = styled.div`
  padding-top: var(--page-intro-small);

  h1 {
    text-transform: uppercase;
    padding-bottom: var(--page-intro-small);
    width: 50%;
  }
  .featuredBlogs__text {
    max-width: 450px;
    max-width: 100%;
  }

  h5 {
    margin-bottom: 2rem;
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
`;
