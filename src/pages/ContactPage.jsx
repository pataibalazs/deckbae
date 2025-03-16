import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center">
      <main className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg w-11/12 mt-10 mb-10">
        <div className="bg-white">
          <div className="mx-auto max-w-7xl mb-10">
            <div className="mx-auto max-w-5xl lg:text-center">
              <p className="mt-2 text-md font-bold tracking-tight text-red-600">
                Kontakt
              </p>
              <p className="mt-2 mb-4 text-4xl font-semibold tracking-tight text-pretty text-gray-900">
                Kérdés, vagy probléma esetén írj nekünk.
              </p>
              <div className="bg-white text-left">
                <form
                  action="#"
                  method="POST"
                  className="mx-auto mt-14 mb-14 max-w-xl"
                >
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Email cím
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="location"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Melyik termék érdekel?
                      </label>
                      <select
                        id="location"
                        name="location"
                        defaultValue="Canada"
                        className="mt-2 block bg-white w-full rounded-md border-0 py-3 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-red-600 sm:text-sm sm:leading-6"
                      >
                        <option>Malibu</option>
                        <option>Helsinki</option>
                        <option>Nincs specifikus</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Üzenet
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <button
                      type="submit"
                      className="block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Küldés
                    </button>
                  </div>
                </form>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-10 text-left">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Ironwud Inc. (Deckbae)
                  </h3>
                  <p className="text-lg font-medium text-gray-800 mb-2">
                    North America
                  </p>
                  <p className="text-md leading-8 text-gray-700">
                    <span className="font-medium">Telephone:</span>{" "}
                    +1(323)-610-0540
                  </p>
                  <p className="text-md leading-8 text-gray-700">
                    <span className="font-medium">WhatsApp:</span> +1(323)
                    610-0540
                  </p>
                  <p className="text-md leading-8 text-gray-700 mt-2">
                    10250 Constellation Blvd Ste 100,
                    <br />
                    Century City, California
                  </p>
                  <p className="text-md leading-8 text-gray-700 mt-2">
                    <span className="font-medium">Email:</span>{" "}
                    <a
                      href="mailto:deckbae@protonmail.com"
                      className="text-red-600 font-bold hover:underline"
                    >
                      deckbae@protonmail.com
                    </a>
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Deckbae Global kft.
                  </h3>
                  <p className="text-lg font-medium text-gray-800 mb-2">
                    Europe
                  </p>
                  <p className="text-md leading-8 text-gray-700">
                    <span className="font-medium">Telephone:</span> +36 30
                    612-78-58
                  </p>
                  <p className="text-md leading-8 text-gray-700">
                    <span className="font-medium">WhatsApp:</span> +1(323)
                    610-0540
                  </p>
                  <p className="text-md leading-8 text-gray-700 mt-2">
                    2073 Tök, Fő utca 1,
                    <br />
                    Hungary
                  </p>
                  <p className="text-md leading-8 text-gray-700 mt-2">
                    <span className="font-medium">Email:</span>{" "}
                    <a
                      href="mailto:deckbaesale@gmail.com"
                      className="text-red-600 font-bold hover:underline"
                    >
                      deckbaesale@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
