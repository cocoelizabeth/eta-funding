import React from 'react';
import { Link } from 'gatsby';
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import { socialLinks } from '../constants/socialLinks';
import Button from './buttons/Button';
import ParagraphText from './typography/ParagraphText'

function Footer() {
  return (
    <FooterStyles>
      <section>
        <div className="footer__wrapper">
          <div className="footer__logo col">
            <Link to="/">
              ETA <br /> / FUNDING
            </Link>
          </div>
          <div className="footer__contactLinks col">
            <ul className="">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.url}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="footer__button col">
            <Button to="/" tag={Link} variant="primaryFilled">
              Intermediary Brochure
            </Button>
          </div> */}
        </div>

        <ParagraphText className="copyright">
        <p>Disclaimer: All information provided on this site is for informational purposes and does not constitute investment advice. Past performance does not guarantee future returns. Investors should seek advice from authorized advisors and be prepared for potential losses.</p>
        <br></br>
          © ETA FUNDING PARTNERS LLC {new Date().getFullYear()}. All rights
          reserved.
        </ParagraphText>
      </section>

      {/* <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul> */}
    </FooterStyles>
  );
}

export default Footer;
