import styled from 'styled-components';

export const ContentSectionStyles = styled.div`
  background-color: var(--racoma-teal);
  color: var(--racoma-light);
  ${"" /* padding-top: var(--page-intro-small); */}
  padding-bottom: calc(var(--page-section) - 4rem);
  padding-top: calc(6rem - 4rem);
  padding-bottom: calc(6rem - 4rem);

  .contentSection__introText {
    padding-top: 4rem;
  }

  .contentSection__grid_row {
    grid-template-columns: 100%;
    p {
      margin-bottom: 2rem;
    }
    p:last-child,
    p:nth-child(2) {
      padding-bottom: 2rem;
    }
    .contentSection_smallHeading {
      border-top: 1px solid var(--racoma-light);
      padding-top: 4rem;
      text-transform: uppercase;
    }
  }
  
  .contentSection_smallHeading {
    text-transform: uppercase;
  }

  @media only screen and (min-width: 720px) {
    padding-top: calc(10.3rem - (var(--grid-gutter) * 3));
    padding-bottom: calc(10.3rem - 4rem);
    .contentSection_smallHeading {
      padding-top: calc(var(--grid-gutter) * 3);
    }
    .contentSection__grid_row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "heading1 heading2"
        "body1 body2";
      grid-column-gap: calc(var(--grid-gutter) * 2);
      column-gap: calc(var(--grid-gutter) * 8);
      border-top: 1px solid var(--racoma-light);
      padding: calc(var(--grid-gutter) * 3);
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      .contentSection_smallHeading {
        border-top: none;
        padding-top: 0px;
      }
      .contentSection_smallHeading {
        font-weight: var(--font-weight-h5);
          font-size: var(--font-size-h5);
          line-height: var(--line-height-h5);
          letter-spacing: var(--letter-spacing-h5);
      }
      p {
        margin-bottom: 2rem;
        :first-child {
          grid-area: heading1;
          column: 1;
          padding-right: calc(var(--grid-gutter) *);
        }
        :nth-child(2) {
          grid-area: body1;
          column: 1;
          padding-right: calc(var(--grid-gutter) *);
        }
        :nth-child(3) {
          grid-area: heading2;
          column: 2;
          padding-left: calc(var(--grid-gutter) *);
        }
        :nth-child(4) {
          grid-area: body2;
          column: 2;
          padding-left: calc(var(--grid-gutter) *);
        }
      }
    }
  }

  background-color: var(--racoma-light);
  color: var(--racoma-teal);

  .contentSection__grid_row {
    :first-of-type {
      border-bottom: 1px solid var(--racoma-teal);
    }
    .contentSection_smallHeading {
      border-top: 1px solid var(--racoma-teal);
      :before {
        /* content: "●"; */
        padding-right: 10px;
      }
    }
    .contentSection_smallHeading:first-of-type {
      border-top: none;
    }
  }

  .reason-item-title:before {
    padding-right: 10px;
  }

  .reason-number-1:before {content: "1.";}
  .reason-number-2:before {content: "2.";}
  .reason-number-3:before {content: "3.";}
  .reason-number-4:before {content: "4.";}


  @media only screen and (min-width: 720px) {
    .contentSection__grid_row {
      ${"" /* border-bottom: 1px solid var(--racoma-teal); */}
      .contentSection_smallHeading {
        border-top: none;
      }
    }
  }
`;
