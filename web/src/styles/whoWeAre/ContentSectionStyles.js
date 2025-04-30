import styled from "styled-components";

export const ContentSectionStyles = styled.div`
  background-color: var(--racoma-teal);
  color: var(--racoma-light);
  ${"" /* padding-bottom: calc(var(--page-intro-small) - 2rem); */}
  width: 100%;
  h2,
  h5,
  strong {
    text-transform: uppercase;
  }

  .introContainer {
    display: flex;
    flex-direction: column;
    ${'' /* margin-top: var(--page-meta-bar); */}

    .headshotContainer {
      .sectionTitle {
        h2 {
        }
        h5 {
        }
      }
      .whoWeAre__iconsList {
        margin-bottom: 3.5rem;
        margin-top: 2.5rem;
        li {
          display: inline-block;
          margin-right: 1rem;
          a {
            display: inline-block;
            width: 25px;
            color: var(--racoma-light);
          }
          :hover {
            a {
              color: var(--racoma-navy);
            }
          }
        }
      }
      .imageContainer {
        /* filter: grayscale(100%);
        -webkit-filter: grayscale(100%); */
        display: flex;
        flex-direction: column;
        padding-right: 50%;
        ${"" /* margin-top: 3.5rem; */}
        ${"" /* margin-bottom: 3.5rem; */}
        .img {
          margin-bottom: 2.4rem;
        }
      }
    }
  }

  .about.body {
    p {
      font-weight: var(--font-weight-medium);
      font-size: 2.2rem;
      line-height: 1.45;
      ${'' /* line-height: 1.1;
      letter-spacing: -0.035em; */}
      padding-right: var(--grid-gutter)
    }
    p:first-of-type {
      margin-bottom: 5em;
    }

    p {
      strong:first-of-type {
        font-weight: var(--font-weight-h5);
        font-size: var(--font-size-h5);
        line-height: var(--line-height-h5);
        letter-spacing: var(--letter-spacing-h5);
      }
    }

    ol {
      margin-top: 2.5rem;
      margin-bottom: 5rem;
      border-bottom: 1px solid var(--racoma-light);
      li {
        position: relative;
        border-top: 0.1rem solid;
        padding: 2.5rem 0 2.4rem 2.5rem;
        overflow: hidden;

        line-height: 1.6;
        display: block;
        font-weight: var(--font-weight-regular);

        strong {
          text-transform: uppercase;
          font-weight: var(--font-weight-bold);
        }
        :before {
          position: absolute;
          left: 0;
          content: "●";
          font-weight: var(--font-weight-bold);
          line-height: 1.6;
          text-transform: uppercase;
        }
      }
    }
  }

  .capitalPartnersContainer {
    margin-top: var(--page-section);
    padding-top: var(--page-meta-bar);
    border-top: 1px solid var(--racoma-light);
    .sectionTitle {
      margin-bottom: 3.5rem;
    }
  }

  @media only screen and (min-width: 720px) {
    ${
      "" /* .sectionTitle {
      max-width: calc(
        (
            (var(--grid-width) + var(--grid-gutter) - var(--grid-padding) * 2) /
              var(--grid-column-count) * 3
          ) - var(--grid-gutter)
      );
    } */
    }
    .capitalPartnersContainer {
      padding-bottom: var(--page-section);
    }
  }

  @media only screen and (min-width: 1024px) {
    .introContainer {
      flex-direction: row;
      justify-content: space-between;
    }
    .headshotContainer {
      flex: 0 0
        calc(
          (
              (var(--grid-width) + var(--grid-gutter) - var(--grid-padding) * 2) /
                var(--grid-column-count) * 2
            ) - 0rem
        );
      padding-right: var(--grid-padding);
    }
    ${
      "" /* .sectionTitle {
      max-width: calc(((var(--grid-width) + var(--grid-gutter) - var(--grid-padding) * 2) / var(--grid-column-count) * 2) - var(--grid-gutter));
    } */
    }
    .aboutContainer {
      flex: 0 0
        calc(
          (
              (var(--grid-width) + var(--grid-gutter) - var(--grid-padding) * 2) /
                var(--grid-column-count) * 4
            ) - var(--grid-gutter)
        );
    }
    .capitalPartnersContainer {
      display: flex;
      justify-content: space-between;
    }
  }

  @media only screen and (min-width: 1280px) {
    .headshotContainer {
      flex: 0 0
        calc(
          (
              (var(--grid-width) + var(--grid-gutter) - var(--grid-padding) * 2) /
                var(--grid-column-count) * 6
            ) - var(--grid-gutter)
        );
    }
    ${
      "" /* .headshotContainer {
      flex: 0 0 calc(((var(--grid-width) + var(--grid-gutter) - var(--grid-padding) * 2) / var(--grid-column-count) * 6) - var(--grid-gutter));
    } */
    }

    .sectionTitle {
      max-width: none;
    }
    .aboutContainer {
      flex: 0 0
        calc(
          (
              (var(--grid-width) + var(--grid-gutter) - var(--grid-padding) * 2) /
                var(--grid-column-count) * 6
            ) - var(--grid-gutter)
        );
    }
  }
`;