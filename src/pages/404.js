import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout className="bg-slate-50 min-h-screen dark:bg-slate-800">
      <Seo
        title="Сторінку не знайдено"
        description="Вибачте, щось пішло не так. Сторінку не знайдено - код помилки 404."
      />

      <main className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-10 py-10 min-h-[65vh] grid content-center">
        <h1 className="text-2xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
          Сторінку не знайдено
        </h1>
        <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Вибачте{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          сторінку, яку ви шукали не знайдено, код помилки 404.
          <br />
          <br />
          <Link
            className="inline-flex justify-center px-8 py-3 font-medium text-slate-900 bg-slate-100 border border-transparent rounded-md hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500"
            to="/"
          >
            На головну
          </Link>
        </p>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
