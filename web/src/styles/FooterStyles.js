import styled from "styled-components";

export const FooterStyles = styled.footer`
  text-align: left;
  background-color: var(--racoma-teal);
  padding-bottom: calc(1.5rem + 2.5vw);
  border-top: 1px solid var(--racoma-light);
  .footer__wrapper {
    display: flex;
    flex-direction: column;
    ${"" /* padding-top: var(--page-intro-small); */}
    width: 100%;
    padding-top: calc(1.5rem + 2.5vw);

    .col {
      ${"" /* width: calc(100% / 3); */}
      margin-bottom: 3rem;
    }
    .footer__logo {
      height: 100%;
      position: relative;
      font-weight: bold;
      line-height: 1.6rem;
      text-transform: uppercase;
    }
    .footer__contactLinks {
      text-decoration: underline;
      ul li a {
        line-height: 2rem;
      }
    }
    .footer__button {
    }
  }

  .copyright {
    margin-top: calc(1.5rem + 2.5vw);
    padding-top: 1.2rem;
    font-size: var(--font-size-small);
    width: 100%;
    text-align: left;
    border-top: 1px solid var(--racoma-light);
  }

  @media only screen and (min-width: 720px) {
    .footer__wrapper {
      ${"" /* padding-top: 2rem; */}
      flex-direction: row;
      justify-content: space-between;
      ${"" /* align-items: flex-end; */}
    }
    .copyright {
      text-align: center;
    }
  }
`;