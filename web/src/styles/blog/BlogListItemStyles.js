import styled from 'styled-components';

export const BlogListItemStyles = styled.div`
  display: inline-block;
  ${"" /* padding: var(--grid-gutter) 0; */}
  border-bottom: 1px solid var(--racoma-light);
  .blogData {
    display: flex;
    position: relative;
    flex-flow: column;
    margin-top: 2rem;
    font-size: var(--font-size-small);
    font-size: 10px;
    line-height: var(--line-height-small);
    letter-spacing: -0.02em;
    text-transform: uppercase;
     padding-bottom: calc(var(--grid-gutter) * 2)
  }

  .categoriesText {
    a {
      text-decoration: var(--link-text-decoration);
      text-underline-offset: var(--link-underline-offset);
      pointer: cursor;
      font-weight: var(--font-weight-bold);
    }
  }
  .title {
    text-transform: uppercase;
    padding-bottom: calc((var(--grid-gutter) * 2) + 2rem);
    pointer: cursor;

  }
  .title:hover {
    color: var(--racoma-navy);
  
    }

  @media only screen and (min-width: 1024px) {
    .blogData {
      flex-flow: row;

    }
    .blogData:firstchild {
      flex: 0 0
        calc(
          (
              (var(--grid-width) + var(--grid-gutter) - var(--grid-padding) * 2) /
                var(--grid-column-count) * 2
            ) - 0rem
        );
    }
  }
  @media only screen and (min-width: 1280px) {
    .blogData {
      display: flex;
      justify-content: space-between;
    }
    .blogData:firstchild {
      flex: 0 0
        calc(
          (
              (var(--grid-width) + var(--grid-gutter) - var(--grid-padding) * 2) /
                var(--grid-column-count) * 4
            ) - 0rem
        );
    }
  }
`;
