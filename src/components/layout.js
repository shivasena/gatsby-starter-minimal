import React from "react";
import Nav from "./navigation";
import Footer from "./footer";

const Layout = ({ children, lang, pagePath }) => {
  return (
    <>
      <Nav pagePath={pagePath} />
      {children}
      <Footer lang={lang === "en" ? "en" : "uk"} />
    </>
  );
};

// Layout.protoTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout;
