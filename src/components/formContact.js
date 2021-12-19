import React from "react";

const ContactForm = ({ lang }) => {
  return (
    <>
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
                  <option>Marketing (SEO, Google Ads, Analytics, etc)</option>
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
          {/* <div className="block">
            <div className="mt-2">
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="
                          rounded
                          border-gray-300
                          text-indigo-600
                          shadow-sm
                          focus:border-indigo-300
                          focus:ring
                          focus:ring-offset-0
                          focus:ring-indigo-200
                          focus:ring-opacity-50
                        "
                    onChange=""
                  />
                  <span className="ml-2">I accept the Privacy Policy</span>
                </label>
              </div>
            </div>
          </div> */}
        </div>
      </form>
    </>
  );
};

export default ContactForm;
