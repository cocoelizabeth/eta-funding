import styled from 'styled-components';

export const PhilosophySectionStyles = styled.div`
  background-color: var(--racoma-navy);
  color: var(--racoma-light);
  padding-top: var(--page-intro-small);
  padding-bottom: var(--page-intro-small);
  .contactSection__wrapper {
    display: flex;
    /* border-top: 1px solid var(--racoma-teal);
    border-bottom: 1px solid var(--racoma-teal); */
    flex-direction: column;
    width: 100%;
    .headingWrapper {
      padding-top: var(--page-intro-small);

      width: 100%;
      .h2 {
        margin-bottom: 3rem;
      }
    }
    .contactSection__cta {
      margin-top: 3rem;
    }
  }

  .contactSection__wrapper {
          padding-bottom: var(--page-intro-small);
  }

  .textWrapper {
      p {
        font-size: 2rem;
      line-height: 1.1;
      letter-spacing: -0.035em;
      }
    }


  @media only screen and (min-width: 1024px) {
    .textWrapper {
      p {
        font-size: 3.2rem;
      }
    }
  }  
`;
