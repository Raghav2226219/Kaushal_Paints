import { Link } from "react-router-dom";

const offerings = [
  {
    title: "Interior Paints",
    description:
      "Beautiful and durable paints for bedrooms, living rooms and indoor spaces.",
    icon: "🏠",
    color:
      "from-blue-500 to-cyan-400",
    bg:
      "bg-blue-50",
    text:
      "text-blue-600",
    link:
      "/products?category=Interior%20Paint",
  },
  {
    title: "Exterior Paints",
    description:
      "Weather-resistant solutions to protect and enhance your exterior walls.",
    icon: "🌦️",
    color:
      "from-orange-500 to-yellow-400",
    bg:
      "bg-orange-50",
    text:
      "text-orange-600",
    link:
      "/products?category=Exterior%20Paint",
  },
  {
    title: "Putty & Primer",
    description:
      "Prepare your surfaces with the right foundation for a smooth finish.",
    icon: "🧱",
    color:
      "from-purple-500 to-pink-400",
    bg:
      "bg-purple-50",
    text:
      "text-purple-600",
    link:
      "/products",
  },
  {
    title: "Waterproofing",
    description:
      "Solutions designed to help protect your walls and surfaces from moisture.",
    icon: "💧",
    color:
      "from-cyan-500 to-blue-400",
    bg:
      "bg-cyan-50",
    text:
      "text-cyan-600",
    link:
      "/products",
  },
  {
    title: "Wood & Metal Paints",
    description:
      "Protective and decorative coatings for wood, metal and other surfaces.",
    icon: "🪵",
    color:
      "from-emerald-500 to-green-400",
    bg:
      "bg-emerald-50",
    text:
      "text-emerald-600",
    link:
      "/products",
  },
  {
    title: "Brushes & Rollers",
    description:
      "Painting tools and accessories to help you get the job done right.",
    icon: "🖌️",
    color:
      "from-red-500 to-orange-400",
    bg:
      "bg-red-50",
    text:
      "text-red-600",
    link:
      "/products",
  },
];

const HomeOfferings = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      {/* Decorative paint circles */}
      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
            What We Offer
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything for your
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              painting project
            </span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base">
            From the first coat of primer to the final finish, find the
            products and materials you need under one roof.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Color strip */}
              <div
                className={`h-1.5 bg-gradient-to-r ${item.color}`}
              />

              <div className="p-6 sm:p-7">
                {/* Icon */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} text-2xl transition duration-300 group-hover:scale-110`}
                >
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>

                <div
                  className={`mt-6 flex items-center gap-2 text-sm font-bold ${item.text}`}
                >
                  Explore Products
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeOfferings;