import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

import Modal from "../../components/modalConnect";

// markup
const IndexPageEn = () => {
  return (
    <Layout className="bg-slate-50 min-h-screen" lang="en" pagePath="/en/">
      <Seo
        title="Traffic Manager & Webmaster - Mike Koval"
        description="Get expert advice on Google Ads, SEO or web development for your business"
        pagePath="/en/"
        lang="en"
      />
      <main className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-10 py-10 min-h-[65vh] grid content-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
          Hi, I'm{" "}
          <span className="inline-block text-slate-700 xl:inline">
            Mike{"\u00A0"}Koval
          </span>
          ,
          <br />
          traffic manager and{"\u00A0"}webmaster
        </h1>
        <div className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Currently available for collaborations and consulting
        </div>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <Modal lang="en" />
        </div>
      </main>
    </Layout>
  );
};

export default IndexPageEn;
