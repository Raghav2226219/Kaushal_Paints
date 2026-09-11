const HomeBrands = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      {/* Decorative paint accents */}
      <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
            Our Brands
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted brands for your
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent">
              {" "}
              painting needs
            </span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base">
            Explore products from the paint brands available at Kaushal
            Paints.
          </p>
        </div>

        {/* Dynamic brand area */}
        <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {/* 
              Brand cards will be rendered here dynamically
              once Site 2 brand management is connected.
            */}

            <div className="flex min-h-28 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50">
              <span className="text-sm font-semibold text-gray-400">
                Brand
              </span>
            </div>

            <div className="flex min-h-28 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50">
              <span className="text-sm font-semibold text-gray-400">
                Brand
              </span>
            </div>

            <div className="flex min-h-28 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50">
              <span className="text-sm font-semibold text-gray-400">
                Brand
              </span>
            </div>

            <div className="flex min-h-28 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50">
              <span className="text-sm font-semibold text-gray-400">
                Brand
              </span>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 px-5 py-4 text-center">
            <p className="text-sm font-medium text-gray-600">
              More brands and products will be available here as our
              catalogue grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBrands;