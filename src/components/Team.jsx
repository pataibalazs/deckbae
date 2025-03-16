const people = [
  {
    name: "Rőczei Gellért Dávid",
    role: "Kivetelező",
    imageUrl: "/pictures/david.jpg",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Rőczei Gellért Dávid",
    role: "Kivetelező",
    imageUrl: "/pictures/david.jpg",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    xUrl: "#",
    linkedinUrl: "#",
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <main className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg w-11/12 mt-10">
        <div className="bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-5xl lg:text-center">
              <p className="mt-2 text-md font-bold tracking-tight text-red-600">
                Csapat
              </p>
              <p className="mt-2 mb-4 text-xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl sm:text-balance">
                Ismerd meg a Deckbae csapatát!
              </p>
            </div>
            <div className="bg-white py-10">
              <div className="mx-auto grid max-w-8xl grid-cols-1 gap-20 px-2 lg:px-8 xl:grid-cols-3">
                <div className="mx-auto max-w-3xl lg:mx-0">
                  <p className="mt-6 text-lg text-gray-600">
                    Csapatunk dinamikus, szenvedélyes szakemberekből áll, akik
                    elkötelezettek a munkájuk iránt és arra törekednek, hogy a
                    legjobb eredményeket nyújtsák ügyfeleinknek. Többéves
                    tapasztalattal rendelkezünk az építőipar területén, ami
                    lehetővé teszi számunkra, hogy innovatív, minőségi
                    megoldásokat kínáljunk minden projekthez. Büszkék vagyunk a
                    részletekre való odafigyelésünkre és a megbízható, időben
                    történő kivitelezésre. Célunk, hogy minden ügyfelünk álmát
                    valósággá változtassuk, miközben egyedi igényeiket és
                    elképzeléseiket helyezzük a középpontba.
                  </p>
                </div>
                <ul
                  role="list"
                  className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
                >
                  {people.map((person) => (
                    <li key={person.name}>
                      <img
                        alt=""
                        src={person.imageUrl}
                        className="aspect-3/2 w-full rounded-2xl object-cover"
                      />
                      <h3 className="mt-6 text-lg/8 font-semibold text-gray-900">
                        {person.name}
                      </h3>
                      <p className="text-base/7 text-gray-600">{person.role}</p>
                      <p className="mt-4 text-base/7 text-gray-600">
                        {person.bio}
                      </p>
                      <ul role="list" className="mt-6 flex gap-x-6">
                        <li>
                          <a
                            href={person.xUrl}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">X</span>
                            <svg
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              className="size-5"
                            >
                              <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href={person.linkedinUrl}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">LinkedIn</span>
                            <svg
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              className="size-5"
                            >
                              <path
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
