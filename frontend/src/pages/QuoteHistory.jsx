import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getQuotes } from "../services/quoteService";

const getStatusStyles = (status) => {
  switch (status) {
    case "SENT_TO_WHATSAPP":
      return "border-blue-200 bg-blue-50 text-blue-700";

    case "CONTACTED":
      return "border-amber-200 bg-amber-50 text-amber-700";

    case "COMPLETED":
      return "border-green-200 bg-green-50 text-green-700";

    case "CANCELLED":
      return "border-red-200 bg-red-50 text-red-700";

    case "PENDING":
    default:
      return "border-gray-200 bg-gray-50 text-gray-700";
  }
};

const formatStatus = (status) => {
  return status
    .toLowerCase()
    .split("_")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(" ");
};

const QuoteHistory = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadQuotes = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getQuotes();

        setQuotes(data.quotes || []);
      } catch (error) {
        console.error("Quote history error:", error);

        setError(
          error.message || "Failed to load quote history",
        );
      } finally {
        setLoading(false);
      }
    };

    loadQuotes();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

            <div className="px-6 py-16 text-center sm:px-8">
              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-gray-900" />

              <p className="mt-4 text-sm font-medium text-gray-600">
                Loading quote history...
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <div className="overflow-hidden rounded-3xl border border-red-200 bg-white shadow-sm">
            <div className="h-1.5 bg-red-500" />

            <div className="px-6 py-12 text-center sm:px-8">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-lg font-bold text-red-600">
                !
              </div>

              <h1 className="mt-5 text-xl font-bold text-gray-900">
                Unable to load quote history
              </h1>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-red-600">
                {error}
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        {/* Page Header */}
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
            Customer Account
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Quote History
              </h1>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                View your previous price requests and their current status.
              </p>
            </div>

            {quotes.length > 0 && (
              <div className="w-fit rounded-full border border-gray-200 bg-white px-3.5 py-2 shadow-sm">
                <span className="text-xs font-semibold text-gray-500">
                  {quotes.length}{" "}
                  {quotes.length === 1 ? "quote" : "quotes"}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Empty State */}
        {quotes.length === 0 ? (
          <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

            <div className="px-6 py-16 text-center sm:px-8 sm:py-20">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-2xl">
                📋
              </div>

              <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
                No Quotes Yet
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
                Your submitted quote requests will appear here. Browse
                our products and create your first quote.
              </p>

              <Link
                to="/products"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white shadow-sm transition duration-200 hover:bg-indigo-600 hover:shadow-md"
              >
                Browse Products
                <span className="text-lg">→</span>
              </Link>
            </div>
          </section>
        ) : (
          /* Quote List */
          <div className="space-y-5">
            {quotes.map((quote) => (
              <section
                key={quote.id}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:border-gray-300 hover:shadow-md"
              >
                {/* Accent */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />

                <div className="p-5 pl-6 sm:p-6 sm:pl-7">
                  {/* Quote Header */}
                  <div className="flex flex-col gap-4 border-b border-gray-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-lg font-bold tracking-tight text-gray-900">
                          Quote #{quote.id}
                        </p>

                        <span
                          className={`rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${getStatusStyles(
                            quote.status,
                          )}`}
                        >
                          {formatStatus(quote.status)}
                        </span>
                      </div>

                      <p className="mt-2 text-xs text-gray-500">
                        Requested on{" "}
                        {new Date(
                          quote.createdAt,
                        ).toLocaleString()}
                      </p>
                    </div>

                    <div className="rounded-xl bg-gray-50 px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Items
                      </p>

                      <p className="mt-1 text-lg font-bold text-gray-900">
                        {quote.items?.length || 0}
                      </p>
                    </div>
                  </div>

                  {/* Quote Items */}
                  <div className="mt-5 space-y-3">
                    {quote.items?.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:border-gray-300 hover:bg-white"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="font-semibold text-gray-900">
                                {item.productName}
                              </p>

                              <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-gray-500">
                                {item.size}
                              </span>
                            </div>

                            <p className="mt-1 text-sm text-gray-500">
                              {item.brand}
                            </p>
                          </div>

                          <div className="w-fit rounded-lg border border-gray-200 bg-white px-3 py-2">
                            <p className="text-xs text-gray-400">
                              Quantity
                            </p>

                            <p className="mt-0.5 text-sm font-bold text-gray-900">
                              {item.quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default QuoteHistory;