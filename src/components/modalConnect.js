import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function MyModal({ buttonText, lang }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="rounded-md shadow">
        <button
          type="button"
          onClick={openModal}
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-700 hover:bg-slate-900 md:py-4 md:text-lg md:px-10"
        >
          {buttonText ? buttonText : "Contact Me"}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-medium leading-6 text-slate-900"
                >
                  {lang === "en" ? "Contact Me" : "Зв'яжіться зі мной"}
                </Dialog.Title>
                {/* <div className="my-2">
                  <p className="text-slate-500">
                    {lang === "en"
                      ? "Please, select the topic of the consultation"
                      : "Будь ласка, оберіть тему консультації"}
                  </p>
                </div> */}

                <form className="max-w-md my-5">
                  <div className="grid grid-cols-1 gap-6">
                    <label className="block">
                      <span className="text-gray-700">
                        {lang === "en"
                          ? "Please, select the topic of the consultation"
                          : "Будь ласка, оберіть тему консультації"}
                      </span>
                      <select
                        className="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                      >
                        {lang === "en" ? (
                          <>
                            <option>
                              Marketing (SEO, Google Ads, Analytics, etc)
                            </option>
                            <option>Web Development</option>
                            <option>Other</option>
                          </>
                        ) : (
                          <>
                            <option>Маркетинг (SEO, Google Реклама)</option>
                            <option>Веб-розробка</option>
                            <option>Інше</option>
                          </>
                        )}
                      </select>
                    </label>
                    <label className="block">
                      <span className="text-gray-700">
                        {lang === "en" ? "Your name" : "Ваше ім`я"}
                      </span>
                      <input
                        type="text"
                        className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                        placeholder=""
                      />
                    </label>
                    <label className="block">
                      <span className="text-gray-700">Email</span>
                      <input
                        type="email"
                        className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                        placeholder="taras@shevchenko.ua"
                      />
                    </label>

                    <label className="block">
                      <span className="text-gray-700">
                        {lang === "en" ? "Your Message" : "Повідомлення"}
                      </span>
                      <textarea
                        className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                        rows="3"
                      ></textarea>
                    </label>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center px-8 py-3 font-medium text-slate-900 bg-slate-100 border border-transparent rounded-md hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500"
                      onClick={closeModal}
                    >
                      {lang === "en" ? "Send Message" : "Відправити"}
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
