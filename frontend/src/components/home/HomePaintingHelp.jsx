import { Link } from "react-router-dom";

const helpOptions = [
  {
    title: "Calculate Paint Requirement",
    description:
      "Estimate the approximate paint, primer and putty required based on your room or wall dimensions.",
    icon: "📐",
    badge: "Paint Calculator",
    link: "/paint-calculator",
    button: "Calculate Now",
    gradient: "from-blue-500 to-cyan-400",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
  },
  {
    title: "Get Painting Services",
    description:
      "Need help with delivery, colour consultation, waterproofing or finding a painter?",
    icon: "🛠️",
    badge: "Painting Solutions",
    link: "/services",
    button: "Explore Services",
    gradient: "from-purple-500 to-pink-400",
    iconBg: "bg-purple-100",
    iconText: "text-purple-600",
  },
  {
    title: "Request a Product Quote",
    description:
      "Select the products you need and send your quotation request directly through WhatsApp.",
    icon: "💬",
    badge: "Quick Quote",
    link: "/products",
    button: "Start Shopping",
    gradient: "from-orange-500 to-yellow-400",
    iconBg: "bg-orange-100",
    iconText: "text-orange-600",
  },
];

const HomePaintingHelp = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative paint accents */}
      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
            Painting Assistance
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We're here to help with your
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              painting project
            </span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base">
            Whether you are planning your first coat or finishing a large
            project, get the tools and support you need.
          </p>
        </div>

        {/* Help cards */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {helpOptions.map((option) => (
            <article
              key={option.title}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Color strip */}
              <div
                className={`h-1.5 bg-gradient-to-r ${option.gradient}`}
              />

              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${option.iconBg} ${option.iconText} transition duration-300 group-hover:scale-110`}
                  >
                    {option.icon}
                  </div>

                  <span className="rounded-full bg-gray-100 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-500">
                    {option.badge}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
                  {option.title}
                </h3>

                <p className="mt-3 min-h-14 text-sm leading-6 text-gray-600">
                  {option.description}
                </p>

                <Link
                  to={option.link}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-bold text-white transition duration-200 hover:bg-indigo-600"
                >
                  {option.button}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
          <div className="flex gap-3">
            <span className="mt-0.5 text-lg">ℹ️</span>

            <p className="text-xs leading-5 text-amber-800 sm:text-sm">
              Paint quantity calculations are approximate planning estimates.
              Actual material consumption may vary depending on the product,
              surface condition, coats, application method, dilution, wastage
              and painter practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePaintingHelp;