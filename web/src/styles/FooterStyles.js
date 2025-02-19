import styled from "styled-components";

export const FooterStyles = styled.footer`
  text-align: left;
  background-color: var(--racoma-dark);
  padding-bottom: calc(1.5rem + 2.5vw);
  /* border-top: 1px solid var(--racoma-light); */
  .footer__wrapper {
    display: flex;
    flex-direction: column;
    ${"" /* padding-top: var(--page-intro-small); */}
    width: 100%;
    /* padding-top: calc(1.5rem + 2.5vw); */
    padding-top: var(--page-intro-small);

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

    .footer__logo_svg {
      line-height: 0;

    }

    .footer__logo_svg a svg{
      max-height: 50px;
      max-width: 100px;

    }
    .footer__contactLinks {
      text-decoration: var(--link-text-decoration);
      text-underline-offset: var(--link-underline-offset);
   
      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 50px;
        /* line-height: 1; */
      }

      
      ul li a {
     
      }
    }
    .footer__button {
    }
  }

  .copyright {

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
    .footer__contactLinks {

    }
    .copyright {
      text-align: center;
    }
  }

  @media only screen and (min-width: 720px) {
    .footer__wrapper .footer__logo_svg a svg{
      max-width: 3000px;
    }
  }

`;