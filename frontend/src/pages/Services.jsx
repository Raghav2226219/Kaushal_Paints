import { useNavigate } from "react-router-dom";
import ServiceCard from "../components/services/ServiceCard";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: "🚚",
      title: "Local Delivery",
      description:
        "Get your paint, tools, and painting materials delivered conveniently to your location.",
      actionLabel: "Request Delivery",
    },
    {
      icon: "🎨",
      title: "Colour Consultation",
      description:
        "Get help choosing suitable colours and paint combinations for your home or project.",
      actionLabel: "Get Consultation",
    },
    {
      icon: "📐",
      title: "Paint Quantity Estimation",
      description:
        "Estimate how much paint, primer, and putty you may need before starting your project.",
      actionLabel: "Calculate Quantity",
    },
    {
      icon: "💧",
      title: "Waterproofing Consultation",
      description:
        "Get guidance on waterproofing products and solutions for walls, roofs, bathrooms, and other areas.",
      actionLabel: "Get Consultation",
    },
    {
      icon: "👨‍🎨",
      title: "Painter Recommendations",
      description:
        "Need a painter? We can help connect you with suitable painting professionals.",
      actionLabel: "Find a Painter",
    },
    {
      icon: "🏗️",
      title: "Contractor & Builder Supply",
      description:
        "Get painting materials and supplies for construction, renovation, and larger projects.",
      actionLabel: "Make an Enquiry",
    },
    {
      icon: "📦",
      title: "Bulk Orders",
      description:
        "Planning a large project? Contact us for bulk requirements and project-specific assistance.",
      actionLabel: "Contact Us",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <section className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 py-10 text-white shadow-xl sm:px-10 sm:py-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/30 blur-3xl" />

          <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
              Kaushal Paints
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
              Painting solutions beyond just paint.
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
              From choosing the right colour to estimating materials and
              arranging supplies, we're here to make your painting project
              easier.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="mt-10">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              What we offer
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                actionLabel={service.actionLabel}
                onAction={
                  service.title === "Paint Quantity Estimation"
                    ? () => navigate("/paint-calculator")
                    : undefined
                }
              />
            ))}
          </div>
        </section>

        {/* Help Section */}
        <section className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Need help?
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                Not sure what you need?
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                Tell us about your painting project and we'll help you figure
                out the right products and quantities.
              </p>
            </div>

            <button
              type="button"
              className="shrink-0 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Contact Kaushal Paints
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Services;
