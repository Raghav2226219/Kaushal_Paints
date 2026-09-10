import { useEffect, useState } from "react";

import { getQuotes } from "../services/quoteService";

const QuoteHistory = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadQuotes = async () => {
      try {
        const data = await getQuotes();

        setQuotes(data.quotes || []);
      } catch (error) {
        console.error("Quote history error:", error);

        setError(
          error.message || "Failed to load quote history"
        );
      } finally {
        setLoading(false);
      }
    };

    loadQuotes();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm text-gray-600">
            Loading quote history...
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-xl border border-red-200 bg-red-50 p-5">
            <p className="text-sm font-medium text-red-700">
              {error}
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Customer Account
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Quote History
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            View your previous price requests.
          </p>
        </div>

        {quotes.length === 0 ? (
          <section className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              No quotes yet
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Your submitted quote requests will appear here.
            </p>
          </section>
        ) : (
          <div className="space-y-5">
            {quotes.map((quote) => (
              <section
                key={quote.id}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-3 border-b border-gray-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Quote #{quote.id}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      {new Date(
                        quote.createdAt
                      ).toLocaleString()}
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                    {quote.status}
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {quote.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col gap-2 rounded-xl bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <p className="font-semibold text-gray-900">
                          {item.productName}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          {item.brand} · {item.size}
                        </p>
                      </div>

                      <p className="text-sm font-semibold text-gray-700">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  ))}
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