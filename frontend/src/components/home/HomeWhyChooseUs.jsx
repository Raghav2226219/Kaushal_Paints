const benefits = [
  {
    title: "Quality Products",
    description:
      "Choose from reliable paints, primers, putty, waterproofing products and painting accessories.",
    icon: "✓",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Expert Guidance",
    description:
      "Get practical guidance to help you choose the right products for your painting requirements.",
    icon: "💡",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Paint Quantity Estimation",
    description:
      "Estimate the approximate amount of paint, primer and putty needed for your project.",
    icon: "📐",
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Local Delivery",
    description:
      "Get your painting materials delivered locally for added convenience.",
    icon: "🚚",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Painter Recommendations",
    description:
      "Need help finding a painter? We can help connect you with painting professionals.",
    icon: "👷",
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Bulk & Contractor Supply",
    description:
      "We support larger painting requirements for contractors, builders and bulk orders.",
    icon: "🏗️",
    color: "bg-red-100 text-red-600",
  },
];

const HomeWhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative paint accents */}
      <div className="absolute -right-24 top-20 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl" />
      <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
            Why Kaushal Paints
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            More than just
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              paint
            </span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base">
            From choosing the right material to estimating your requirements,
            we're here to make your painting project easier.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-7"
            >
              {/* Hover accent */}
              <div className="absolute right-0 top-0 h-1 w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl ${benefit.color}`}
              >
                {benefit.icon}
              </div>

              <h3 className="mt-6 text-lg font-bold tracking-tight text-gray-900">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeWhyChooseUs;