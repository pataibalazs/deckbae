import React from "react";
import FAQ from "../components/FAQ";
import HeroWithImage from "../components/HeroWithImage";
import Features from "../components/Features";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <div className="bg-gray-100 flex justify-center">
        <main className="flex flex-col items-center bg-white shadow-md rounded-lg w-11/12 mt-10">
          <HeroWithImage />
          <Features />

          <div className="mx-auto max-w-2xl sm:text-center mb-10">
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance">
              Gyakori kérdések
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Van olyan kérdésed, amely nem szerepel a listában? Írj nekünk a{" "}
              <Link
                to="/contact"
                className="text-red-600 font-medium hover:underline"
              >
                Kontakt
              </Link>{" "}
              oldalon.
            </p>
          </div>
          <FAQ />

          <div className="mx-auto w-11/12 lg:text-center mt-20 mb-10">
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance">
              Rólunk
            </p>
            <p className="mt-6 mb-4 text-lg/8 text-gray-600 max-w-3xl mx-auto">
              Ismerd meg a Deckbae mögött álló filozófiánkat. Elkötelezettek
              vagyunk a minőségi kivitelezés és az ügyfeleink álmainak
              megvalósítása mellett.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="md:w-1/2">
                <p className="mt-6 text-lg leading-8 text-gray-900 text-left">
                  A Deckbae könnyűszerkezetes házak, pergolák, pavilonok és
                  melléképületek kivitelezésével foglalkozik. Termékeink modern,
                  energiatakarékos és esztétikailag kifinomult megoldásokat
                  kínálnak, amelyek tökéletesen illeszkednek a természetes
                  környezetbe. A széles választékunk lehetőséget ad arra, hogy
                  mindenki megtalálja az igényeinek megfelelő otthont vagy
                  kiegészítő épületet. Minőségi alapanyagokat és korszerű
                  technológiákat használunk annak érdekében, hogy ügyfeleink
                  maximális komfortot élvezhessenek otthonukban vagy
                  nyaralójukban.
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <img
                  className="w-full rounded-lg shadow-xl hover:scale-[1.02] transition-transform duration-300"
                  src="/pictures/houses/oslo/haz.png"
                  alt="Deckbae ház"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Homepage;
