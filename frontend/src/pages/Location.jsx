import { Phone, MapPin, Clock, Navigation } from "lucide-react";

const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/5vajigwuVhRJD87o7";

const PHONE_NUMBER = "9914910606";

const Location = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50" />

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-200/30 blur-3xl" />

          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />

          <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <span className="inline-flex items-center rounded-full border border-indigo-200 bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600 shadow-sm">
              Visit Our Store
            </span>

            <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Find
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Kaushal Paints
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Visit our store near 22 No. Phatak, Patiala for paints,
              painting materials and professional painting solutions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white shadow-sm transition duration-200 hover:bg-indigo-600 hover:shadow-md"
              >
                <Navigation size={17} />
                Get Directions
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition duration-200 hover:border-gray-400 hover:bg-gray-50"
              >
                <Phone size={17} />
                Call Us
              </a>
            </div>
          </div>
        </section>

        {/* Information Cards */}
        <section className="mt-6 grid gap-5 md:grid-cols-3">
          {/* Address */}
          <article className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 transition duration-300 group-hover:scale-105">
              <MapPin size={22} />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-gray-400">
              Store Address
            </p>

            <h2 className="mt-2 text-lg font-bold text-gray-900">
              Kaushal Paints
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Near 22 No. Phatak,
              <br />
              Patiala, Punjab 147001
            </p>
          </article>

          {/* Opening Hours */}
          <article className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 transition duration-300 group-hover:scale-105">
              <Clock size={22} />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-gray-400">
              Opening Hours
            </p>

            <h2 className="mt-2 text-lg font-bold text-gray-900">
              We're Open
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Every Day
              <br />
              <span className="font-semibold text-gray-900">
                9:30 AM – 8:00 PM
              </span>
            </p>
          </article>

          {/* Contact */}
          <article className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-pink-600 transition duration-300 group-hover:scale-105">
              <Phone size={22} />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-gray-400">
              Contact
            </p>

            <h2 className="mt-2 text-lg font-bold text-gray-900">
              Call Kaushal Paints
            </h2>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="mt-2 inline-block text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
            >
              {PHONE_NUMBER}
            </a>
          </article>
        </section>

        {/* Location Section */}
        <section className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

          <div className="grid lg:grid-cols-2">
            {/* Location Information */}
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                Store Location
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Visit us in Patiala
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                We're located near 22 No. Phatak in Patiala. Use Google
                Maps to get directions directly to the store.
              </p>

              <div className="mt-7 rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Kaushal Paints
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Near 22 No. Phatak,
                      <br />
                      Patiala, Punjab 147001
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white transition duration-200 hover:bg-indigo-600 sm:w-auto"
              >
                <Navigation size={17} />
                Open in Google Maps
              </a>
            </div>

            {/* Map Preview */}
            <div className="relative min-h-72 bg-gradient-to-br from-gray-100 via-indigo-50 to-purple-100 lg:min-h-full">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full max-w-sm rounded-3xl border border-white/70 bg-white/90 p-6 text-center shadow-xl backdrop-blur-sm">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    <MapPin size={30} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    Kaushal Paints
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Near 22 No. Phatak
                    <br />
                    Patiala, Punjab 147001
                  </p>

                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 transition hover:text-indigo-700"
                  >
                    View on Maps
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-6 overflow-hidden rounded-3xl bg-gray-900 px-6 py-10 text-center shadow-sm sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">
            Need Help?
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Have a question before visiting?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400">
            Give us a call and we'll be happy to help with product
            availability, painting requirements or store directions.
          </p>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-gray-900 transition duration-200 hover:bg-indigo-50"
          >
            <Phone size={17} />
            Call {PHONE_NUMBER}
          </a>
        </section>
      </div>
    </main>
  );
};

export default Location;