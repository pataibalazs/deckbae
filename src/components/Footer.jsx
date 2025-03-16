import { Link } from "react-router-dom";

const navigation = {
  main: [
    { name: "Főoldal", href: "/" },
    { name: "Típusházaink", href: "/houses" },
    { name: "Kiegészítések", href: "/extras" },
    { name: "Csapat", href: "/teams" },
    { name: "Rólunk", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                to={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="flex justify-center space-x-10">
          <div className="flex items-center flex-none">
            <Link to="/" className="no-underline mt-6">
              <span
                className="font-bold text-4xl tracking-widest text-red-600 italic font-['Futura', 'Helvetica', sans-serif]"
                style={{ letterSpacing: "0.08em" }}
              >
                DECKBAE
                <span className="text-xs align-text-top relative top-[0.8em] ml-0.5">
                  TM
                </span>
              </span>
            </Link>
          </div>
        </div>
        <p className="mt-6 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} DECKBAE Kft. Minden jog fenntartva.
        </p>
      </div>
    </footer>
  );
}
