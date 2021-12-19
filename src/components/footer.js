import React from "react";
import { Link } from "gatsby";

const Footer = ({ lang }) => {
  return (
    <footer className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 border-t py-10 text-center flex items-center justify-center text-sm text-slate-500">
      {lang === "en" ? (
        <p>© 2021 All rights reserved..</p>
      ) : (
        <p>© 2021 Всі права захищено.</p>
      )}
      <p className="ml-3 border-l border-slate-200 pl-3">
        <Link className="hover:text-slate-600 underline" to="/oferta/">
          {lang === "en" ? "Public offer" : "Оферта"}
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
