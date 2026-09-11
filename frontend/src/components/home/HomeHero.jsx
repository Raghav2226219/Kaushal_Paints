import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50" />

      {/* Paint blobs */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute top-1/2 left-1/3 h-60 w-60 rounded-full bg-yellow-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
            Kaushal Paints
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Everything You Need to
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Bring Your Walls to Life
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Quality paints, painting materials and solutions for homes,
            businesses and professionals.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-indigo-600"
            >
              Explore Products
            </Link>

            <Link
              to="/quote"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
            >
              Get a Quote
            </Link>

            <Link
              to="/location"
              className="inline-flex items-center justify-center text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
            >
              Visit Store →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;