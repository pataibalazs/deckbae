export default function HeroWithImage() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-0 lg:px-0">
        <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-8 lg:pt-16 lg:pb-48 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0">
            <h1 className="mt-24 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:mt-10 sm:text-7xl">
              Tervezd meg és építsd fel álmaid otthonát!
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              A Deckbae prémium minőségű könnyűszerkezetes házakat kínál modern
              és fenntartható kivitelben. Gyors kivitelezés, energiatakarékos
              megoldások és időtálló dizájn – minden, amit egy tökéletes otthon
              nyújthat.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Kezdjük el
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Tudj meg többet <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-0 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            alt="DECKBAE"
            src="/pictures/dock.jpg"
            className="aspect-3/2 w-full bg-gray-50 object-cover rounded-md lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
          />
        </div>
      </div>
    </div>
  );
}
