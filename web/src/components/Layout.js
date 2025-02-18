import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";
import { useScrollRestoration } from "gatsby";

function Layout({ children }) {
    // const ulScrollRestoration = useScrollRestoration(`page-component-ul-list`);

  return (
    <>
      <GlobalStyles />
      <Header />
      {/* <div className="smooth-scroll-content"> */}
      <main>{children}</main>
      {/* </div> */}
      <Footer />
    </>
  );
}

export default Layout;
