import styled from 'styled-components';

export const ContactSectionStyles = styled.div`
  background-color: var(--racoma-navy);
  color: var(--racoma-light);
  padding-top: var(--page-intro-small);
  padding-bottom: var(--page-intro-small);
  .contactSection__wrapper {
    display: flex;
    ${'' /* border-top: 1px solid var(--racoma-teal); */}
    flex-direction: column;
    width: 100%;
    .headingWrapper {
      width: 100%;
      .h2 {
        margin-bottom: 3rem;
      }
    }
    .subheadingText {
      font-size: 2rem;
    }
    .contactSection__cta {
      margin-top: 3rem;
    }
  }
`;
