import styled from 'styled-components';
// import '../../../public/animation-text.scss';

export const HeroSectionStyles = styled.div`
  margin-top: 0;
  ${
    '' /* 
  height: 100%;
  min-height: calc(100vh - var(--header-height));
  width: 100%; */
  }

  .hero__wrapper {
    position: relative;
    background-color: var(--racoma-teal);
    margin-top: 0;
    padding-bottom: var(--page-section);

    ${
      '' /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
    }

    ${'' /* margin-bottom: var(--page-section); */}
  }
  .hero__wrapper .h2 {
    position: relative;
    padding-top: var(--page-intro-small);
    text-transform: uppercase;
  }

  .headlineText {
    text-transform: uppercase;
    width: 100%;
    font-size: 4rem;
    ${
      '' /* 
    font-size: 3.2rem !important; */
    }
  }

  .subheadingText {
    display: block;
    line-height: 1.1;
    letter-spacing: -0.035em;
    ${'' /* margin-top: 4rem; */}
    margin-top: var(--grid-padding);
    text-transform: none;
    font-size: 3.2rem;
    font-size: 2rem;
  }

  .heroCTA {
    margin-top: calc(var(--grid-gutter) * 2);
  }

  .lineBreakContainer {
    width: 100%;
    height: calc(var(--page-section) * 2);
    display: flex;
    align-content: center;
    justify-content: center;
    .lineBreak {
      height: 1px;
      width: 100%;
      background-color: var(--racoma-light);
      margin: auto;
    }
  }

  ${
    '' /* @media only screen and (max-width: 1023px) {
    height: calc(100vh - var(--header-height) - (var(--page-section) * 2));
    min-height: calc(100vh - var(--header-height) - (var(--page-section) * 2));
  } */
  }

  @media only screen and (min-width: 1024px) {
    .hero-wrapper {
      ${
        '' /* diplay: flex;
      height: 100%;
      min-height: 100vh; */
      }
    }
    .headlineText {
      padding-bottom: 1em;
      font-size: 5.3vw;
      width: 50%;
      width: 100%;
    }
    .subheadingText {
      ${'' /* font-size: 4.2rem; */}
      font-size: 3.2rem;
      padding-left: 50%;
    }
    .lineBreakContainer {
      height: calc(var(--page-section));
    }
  }

  .headlineText {
    ${'' /* animation: slide-in-from-right 1.7s ease-out 0s 1; */}
  }

  .subheadingText {
    ${'' /* animation: fade-in-delay-5s 9s ease-out 0s 1; */}
    ${'' /* animation: slide-in-from-right 2.3s ease-out 0s 1; */}
  }

  ${
    '' /* .heroCTA {
    animation: fade-in 3s ease-in 0s 1;
  } */
  }
`;
