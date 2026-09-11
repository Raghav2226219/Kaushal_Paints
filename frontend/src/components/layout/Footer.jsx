import { Link } from "react-router-dom";

const PHONE_NUMBER = "9914910606";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-white">
      {/* Color accent */}
      <div className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block text-2xl font-bold tracking-tight"
            >
              Kaushal Paints
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-400">
              Quality paints, painting materials and practical painting
              solutions for homes, businesses and professionals.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-300">
                Paints
              </span>

              <span className="rounded-full bg-purple-500/10 px-3 py-1.5 text-xs font-semibold text-purple-300">
                Materials
              </span>

              <span className="rounded-full bg-pink-500/10 px-3 py-1.5 text-xs font-semibold text-pink-300">
                Painting Solutions
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300">
              Quick Links
            </h3>

            <nav className="mt-4 space-y-3">
              <Link
                to="/"
                className="block text-sm text-gray-400 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="block text-sm text-gray-400 transition hover:text-white"
              >
                Products
              </Link>

              <Link
                to="/services"
                className="block text-sm text-gray-400 transition hover:text-white"
              >
                Services
              </Link>

              <Link
                to="/paint-calculator"
                className="block text-sm text-gray-400 transition hover:text-white"
              >
                Paint Calculator
              </Link>

              <Link
                to="/location"
                className="block text-sm text-gray-400 transition hover:text-white"
              >
                Location
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300">
              Contact
            </h3>

            <div className="mt-4 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Address
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Near 22 No. Phatak,
                  <br />
                  Patiala, Punjab 147001
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Phone
                </p>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="mt-1 inline-block text-sm font-semibold text-gray-300 transition hover:text-white"
                >
                  {PHONE_NUMBER}
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Hours
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Every Day · 9:30 AM – 8:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-gray-800 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Kaushal Paints. All rights reserved.
          </p>

          <p className="text-xs text-gray-600">
            Paints • Materials • Painting Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;