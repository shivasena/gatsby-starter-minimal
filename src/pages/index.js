import * as React from "react";

import Seo from "../components/seo";
import Layout from "../components/layout";
import Modal from "../components/modalConnect";

// markup
const IndexPage = () => {
  return (
    <Layout className="bg-slate-50 min-h-screen dark:bg-slate-800" pagePath="/">
      <Seo
        title="Консультант з маркетингу і вебмайстер Mike Koval"
        description="Отримати експертну консультацію по Google Ads, SEO або з веб розробки для твого бізнесу."
        pagePath="/"
        lang="uk"
      />
      <main className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-10 py-10 min-h-[65vh] grid content-center">
        <h1 className="text-2xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
          Привіт, я{" "}
          <span className="inline-block text-slate-700 xl:inline">
            Михайло{"\u00A0"}Коваль
          </span>
          ,
          <br />
          трафік менеджер і{"\u00A0"}вебмайстер
        </h1>
        <div className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Доступний для консультацій з маркетингу або веброзробки
        </div>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          {/* <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Contact Me
            </a>
          </div> */}
          {/* <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
            >
              Live demo
            </a>
          </div> */}
          <Modal buttonText="Зв'язатися" />
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
