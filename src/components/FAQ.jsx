import React from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Miből készülnek a könnyűszerkezetes házak?",
    answer:
      "A könnyűszerkezetes házak alapját acél vagy fa vázszerkezet adja, amelyet különböző szigetelő- és burkolóanyagokkal egészítünk ki. Ezek a modern építőanyagok kiváló hőszigetelést és tartósságot biztosítanak.",
  },
  {
    question: "Mennyi idő alatt épül fel egy könnyűszerkezetes ház?",
    answer:
      "Az építkezés időtartama a ház méretétől és a választott kivitelezési opciótól függ. Általában 3-6 hónap alatt kulcsrakész állapotba tudjuk hozni az épületet, ami jelentősen rövidebb a hagyományos építkezéseknél.",
  },
  {
    question: "Milyen garanciát vállalnak a házakra?",
    answer:
      "Az épületeinkre 10 év szerkezeti garanciát vállalunk, ezen felül pedig az egyes beépített termékekre a gyártói garanciák érvényesek.",
  },
  {
    question: "Mennyire energiatakarékosak ezek a házak?",
    answer:
      "Házaink kifejezetten energiahatékonyak. A korszerű szigetelésnek és a modern épületgépészeti megoldásoknak köszönhetően akár 40-50%-kal alacsonyabb lehet a fűtési-hűtési költség a hagyományos épületekhez képest.",
  },
  {
    question: "Van lehetőség egyedi tervezésű épületekre?",
    answer: (
      <>
        Igen, lehetőség van egyedi méretű és kialakítású épületek tervezésére.
        Vegye fel velünk a kapcsolatot a{" "}
        <Link
          to="/contact"
          className="text-white underline font-medium hover:text-gray-200"
        >
          Kontakt
        </Link>{" "}
        oldalon, és segítünk megvalósítani elképzeléseit!
      </>
    ),
  },
];

const FAQ = () => {
  return (
    <ul className="max-w-3xl mx-auto space-y-5 w-full">
      {faqs.map((faq, index) => (
        <li key={index} className="shadow-md">
          <details className="group w-full rounded-md">
            <summary className="flex items-center gap-3 px-6 py-4 font-medium marker:content-none cursor-pointer w-full bg-red-500 rounded-md group-open:rounded-b-none">
              <svg
                className="w-5 h-5 transition-transform duration-200 group-open:rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  stroke="#ffffff"
                  strokeWidth="1"
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                ></path>
              </svg>
              <span className="text-lg font-medium text-white">
                {faq.question}
              </span>
            </summary>
            <article className="px-4 pb-4 pt-2 bg-red-500 rounded-b-md">
              <p className="text-white">{faq.answer}</p>
            </article>
          </details>
        </li>
      ))}
    </ul>
  );
};

export default FAQ;
