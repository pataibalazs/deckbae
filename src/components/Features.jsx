import {
  HomeIcon,
  BoltIcon,
  LightBulbIcon,
  GlobeAmericasIcon,
  BanknotesIcon,
  AcademicCapIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Modern és fenntartható házak",
    description:
      "A Deckbae könnyűszerkezetes házai energiatakarékosak, gyorsan építhetők, és modern megjelenést biztosítanak.",
    icon: HomeIcon,
  },
  {
    name: "Gyors és precíz kivitelezés",
    description:
      "Rövid határidőkkel dolgozunk, hogy ügyfeleink minél hamarabb birtokba vehessék új otthonukat.",
    icon: BoltIcon,
  },
  {
    name: "Innovatív technológiák",
    description:
      "Fejlett építési megoldásokkal és minőségi alapanyagokkal biztosítjuk a hosszú élettartamot és a komfortot.",
    icon: LightBulbIcon,
  },
  {
    name: "Nemzetközi színvonal",
    description:
      "Világszerte elismert építési technológiákat alkalmazunk a tartósság és hatékonyság érdekében.",
    icon: GlobeAmericasIcon,
  },
  {
    name: "Költséghatékony megoldások",
    description:
      "Megfizethető áron kínálunk kiváló minőségű, alacsony fenntartási költségű otthonokat.",
    icon: BanknotesIcon,
  },
  {
    name: "Szakértelem és megbízhatóság",
    description:
      "Tapasztalt csapatunk gondoskodik a professzionális kivitelezésről és az ügyféligények maximális kielégítéséről.",
    icon: AcademicCapIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base/7 font-bold text-red-600">
            Minden, amire szükséged lehet
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance">
            Készen állsz az új otthonodra?
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            A DECKBAE csapata teljes körű kivitelezési szolgáltatásokat nyújt
            könnyűszerkezetes házak építéséhez. Gyors, megbízható és
            fenntartható megoldások egy helyen!
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            alt="App screenshot"
            src="/pictures/featureHouse.png"
            width={2432}
            height={1442}
            className="mb-[-5%] rounded-xl ring-1 shadow-2xl ring-gray-900/10"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-6 sm:mt-10 md:mt-14 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="font-semibold text-gray-900">
                <feature.icon
                  aria-hidden="true"
                  className="absolute top-1 left-1 size-5 text-red-600"
                />
                {feature.name}
              </dt>
              <dd className="mt-2">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
