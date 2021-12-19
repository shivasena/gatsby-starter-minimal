/* This example requires Tailwind CSS v2.0+ */
// import React, { Fragment, useContext } from "react";
import React from "react";
import { Link } from "gatsby";
import { Disclosure } from "@headlessui/react";
// import {
//   GlobalDispatchContext,
//   GlobalStateContext,
// } from "../context/GlobalContextProvider";
import { BsFacebook } from "react-icons/bs";

export default function Navigation({ pagePath }) {
  // const dispatch = useContext(GlobalDispatchContext);
  // const state = useContext(GlobalStateContext);

  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                {/* <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <VscChromeClose
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <VscMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button> */}
              </div>
              <div className="flex-1 flex items-center sm:items-stretch justify-start">
                <Link
                  to="/"
                  className="flex-shrink-0 flex items-center text-xl font-extrabold uppercase"
                >
                  <span className="text-slate-700">Koval</span>
                  <span className="text-slate-500">Dev</span>
                </Link>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  onClick={() => {
                    dispatch({ type: "TOGGLE_THEME" });
                  }}
                >
                  toggle {state.theme}
                </button> */}
                <span className="mx-5">
                  {pagePath === "/en/" ? (
                    <>
                      <Link to="/" className="mr-3 underline">
                        Укр
                      </Link>
                      <span className="">En</span>
                    </>
                  ) : (
                    <>
                      <span className="mr-3">Укр</span>
                      <Link to="/en/" className="underline">
                        En
                      </Link>
                    </>
                  )}
                </span>
                <a
                  href="https://www.facebook.com/koval.mike"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-500 p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-500 focus:ring-white"
                >
                  <span className="sr-only">Facebook Page</span>
                  <BsFacebook className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-slate-900 text-white"
                      : "text-slate-300 hover:bg-slate-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <button className="text-slate-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Facebook
              </button>
            </div>
          </Disclosure.Panel> */}
        </>
      )}
    </Disclosure>
  );
}
