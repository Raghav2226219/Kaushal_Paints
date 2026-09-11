const ServiceCard = ({
  icon,
  title,
  description,
  actionLabel,
  onAction,
}) => {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 opacity-70 transition duration-300 group-hover:scale-125" />

      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-2xl shadow-sm">
          <span>{icon}</span>
        </div>

        <h2 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>

        <p className="mt-3 min-h-16 text-sm leading-6 text-gray-600">
          {description}
        </p>

        <button
          type="button"
          onClick={onAction}
          className="mt-6 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700"
        >
          {actionLabel}
        </button>
      </div>
    </article>
  );
};

export default ServiceCard;