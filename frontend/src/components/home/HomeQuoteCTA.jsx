import { Link } from "react-router-dom";

const HomeQuoteCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      {/* Colorful paint background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50" />

      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="absolute right-0 top-1/2 h-80 w-80 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-64 w-64 rounded-full bg-yellow-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="overflow-hidden rounded-3xl bg-gray-900 shadow-xl">
          <div className="relative px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            {/* Decorative paint circles */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/30 blur-2xl" />
            <div className="absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-pink-500/20 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                    Quick & Easy Quote
                  </span>
                </div>

                <h2 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Know what you need?
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Let's get you a quote.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                  Browse our products, select the sizes and quantities you
                  need, and send your quotation request directly through
                  WhatsApp.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-gray-900 transition duration-200 hover:bg-indigo-50"
                  >
                    Browse Products
                    <span>→</span>
                  </Link>

                  <Link
                    to="/location"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white transition duration-200 hover:bg-white/10"
                  >
                    Visit Our Store
                  </Link>
                </div>
              </div>

              {/* Quote flow visual */}
              <div className="w-full lg:w-80">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    How it works
                  </p>

                  <div className="mt-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-sm">
                        1
                      </div>
                      <p className="text-sm font-medium text-gray-200">
                        Select your products
                      </p>
                    </div>

                    <div className="h-px bg-white/10" />

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-500/20 text-sm">
                        2
                      </div>
                      <p className="text-sm font-medium text-gray-200">
                        Add sizes & quantities
                      </p>
                    </div>

                    <div className="h-px bg-white/10" />

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-pink-500/20 text-sm">
                        3
                      </div>
                      <p className="text-sm font-medium text-gray-200">
                        Request your quote
                      </p>
                    </div>

                    <div className="mt-5 rounded-xl bg-green-500/10 px-4 py-3 text-center">
                      <p className="text-xs font-semibold text-green-300">
                        Quote request opens in WhatsApp
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeQuoteCTA;