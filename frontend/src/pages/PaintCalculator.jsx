import { useState } from "react";

const PaintCalculator = () => {
  const [form, setForm] = useState({
    length: "",
    width: "",
    height: "",
    doors: 1,
    windows: 2,
    doorWidth: "3",
    doorHeight: "7",
    windowWidth: "4",
    windowHeight: "4",
    includeCeiling: false,
  });

  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const formatRange = (value, step) => {
    const lower = Math.floor(value / step) * step;
    const upper = Math.ceil(value / step) * step;

    if (lower === upper) {
      return `~${upper}`;
    }

    return `~${lower}–${upper}`;
  };

  const handleCalculate = () => {
    const length = Number(form.length);
    const width = Number(form.width);
    const height = Number(form.height);

    const doors = Number(form.doors);
    const windows = Number(form.windows);

    const doorWidth = Number(form.doorWidth);
    const doorHeight = Number(form.doorHeight);

    const windowWidth = Number(form.windowWidth);
    const windowHeight = Number(form.windowHeight);

    if (
      length <= 0 ||
      width <= 0 ||
      height <= 0 ||
      doors < 0 ||
      windows < 0 ||
      doorWidth < 0 ||
      doorHeight < 0 ||
      windowWidth < 0 ||
      windowHeight < 0
    ) {
      setResult(null);
      return;
    }

    /*
      These are general planning assumptions only.
      Actual product coverage can vary significantly by product,
      surface condition, dilution, application method and painter practice.
    */
    const COVERAGE = {
      paint: 120,
      primer: 150,
      putty: 15,
    };

    const COATS = {
      paint: 2,
      primer: 1,
      putty: 1,
    };

    // Calculate total wall area
    const wallArea = 2 * (length + width) * height;

    // Calculate openings
    const doorArea = doors * doorWidth * doorHeight;
    const windowArea = windows * windowWidth * windowHeight;

    // Remove doors and windows from wall area
    const paintableWallArea = Math.max(
      0,
      wallArea - doorArea - windowArea
    );

    // Add ceiling only if selected
    const ceilingArea = form.includeCeiling
      ? length * width
      : 0;

    const totalPaintableArea =
      paintableWallArea + ceilingArea;

    // Approximate material requirement
    const paintLitres =
      (totalPaintableArea * COATS.paint) /
      COVERAGE.paint;

    const primerLitres =
      (totalPaintableArea * COATS.primer) /
      COVERAGE.primer;

    const puttyKg =
      (totalPaintableArea * COATS.putty) /
      COVERAGE.putty;

    setResult({
      wallArea,
      doorArea,
      windowArea,
      paintableWallArea,
      ceilingArea,
      totalPaintableArea,

      paintLitres,
      primerLitres,
      puttyKg,

      paintEstimate: formatRange(paintLitres, 1),
      primerEstimate: formatRange(primerLitres, 1),
      puttyEstimate: formatRange(puttyKg, 5),
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Painting Tools
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Paint Quantity Calculator
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
            Enter your room dimensions and we'll estimate the
            paintable area and approximate material requirement.
          </p>
        </div>

        {/* Calculator Form */}
        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900">
              Room Details
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Enter the dimensions in feet.
            </p>
          </div>

          {/* Room Dimensions */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* Length */}
            <div>
              <label
                htmlFor="length"
                className="text-sm font-semibold text-gray-700"
              >
                Room Length
              </label>

              <div className="mt-2 flex">
                <input
                  id="length"
                  name="length"
                  type="number"
                  min="0"
                  step="0.1"
                  value={form.length}
                  onChange={handleChange}
                  placeholder="e.g. 20"
                  className="w-full rounded-l-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                />

                <span className="flex items-center rounded-r-xl border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                  ft
                </span>
              </div>
            </div>

            {/* Width */}
            <div>
              <label
                htmlFor="width"
                className="text-sm font-semibold text-gray-700"
              >
                Room Width
              </label>

              <div className="mt-2 flex">
                <input
                  id="width"
                  name="width"
                  type="number"
                  min="0"
                  step="0.1"
                  value={form.width}
                  onChange={handleChange}
                  placeholder="e.g. 15"
                  className="w-full rounded-l-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                />

                <span className="flex items-center rounded-r-xl border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                  ft
                </span>
              </div>
            </div>

            {/* Height */}
            <div>
              <label
                htmlFor="height"
                className="text-sm font-semibold text-gray-700"
              >
                Wall Height
              </label>

              <div className="mt-2 flex">
                <input
                  id="height"
                  name="height"
                  type="number"
                  min="0"
                  step="0.1"
                  value={form.height}
                  onChange={handleChange}
                  placeholder="e.g. 10"
                  className="w-full rounded-l-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                />

                <span className="flex items-center rounded-r-xl border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                  ft
                </span>
              </div>
            </div>
          </div>

          {/* Openings */}
          <div className="mt-10 border-t border-gray-100 pt-8">
            <h2 className="text-xl font-bold text-gray-900">
              Doors & Windows
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              We'll subtract these areas from the total wall area.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Doors */}
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">
                  Doors
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="doors"
                      className="text-xs font-semibold uppercase tracking-wider text-gray-500"
                    >
                      Quantity
                    </label>

                    <input
                      id="doors"
                      name="doors"
                      type="number"
                      min="0"
                      step="1"
                      value={form.doors}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="doorWidth"
                      className="text-xs font-semibold uppercase tracking-wider text-gray-500"
                    >
                      Width (ft)
                    </label>

                    <input
                      id="doorWidth"
                      name="doorWidth"
                      type="number"
                      min="0"
                      step="0.1"
                      value={form.doorWidth}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="doorHeight"
                      className="text-xs font-semibold uppercase tracking-wider text-gray-500"
                    >
                      Height (ft)
                    </label>

                    <input
                      id="doorHeight"
                      name="doorHeight"
                      type="number"
                      min="0"
                      step="0.1"
                      value={form.doorHeight}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                    />
                  </div>
                </div>
              </div>

              {/* Windows */}
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">
                  Windows
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="windows"
                      className="text-xs font-semibold uppercase tracking-wider text-gray-500"
                    >
                      Quantity
                    </label>

                    <input
                      id="windows"
                      name="windows"
                      type="number"
                      min="0"
                      step="1"
                      value={form.windows}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="windowWidth"
                      className="text-xs font-semibold uppercase tracking-wider text-gray-500"
                    >
                      Width (ft)
                    </label>

                    <input
                      id="windowWidth"
                      name="windowWidth"
                      type="number"
                      min="0"
                      step="0.1"
                      value={form.windowWidth}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="windowHeight"
                      className="text-xs font-semibold uppercase tracking-wider text-gray-500"
                    >
                      Height (ft)
                    </label>

                    <input
                      id="windowHeight"
                      name="windowHeight"
                      type="number"
                      min="0"
                      step="0.1"
                      value={form.windowHeight}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ceiling */}
          <div className="mt-8 rounded-2xl border border-gray-200 p-5">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="includeCeiling"
                checked={form.includeCeiling}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-gray-300"
              />

              <span>
                <span className="block text-sm font-semibold text-gray-900">
                  Include ceiling
                </span>

                <span className="mt-1 block text-sm text-gray-500">
                  Include the ceiling area in the paint estimate.
                </span>
              </span>
            </label>
          </div>

          {/* Calculate */}
          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={handleCalculate}
              className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Calculate Requirement
            </button>
          </div>
        </section>

        {/* Results */}
        {result && (
          <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Estimate
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
                Approximate Material Requirement
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Based on the calculated paintable area and general
                planning assumptions.
              </p>
            </div>

            {/* Area Summary */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-gray-50 p-5">
                <p className="text-sm text-gray-500">
                  Total Wall Area
                </p>

                <p className="mt-2 text-2xl font-bold text-gray-900">
                  {result.wallArea.toFixed(1)} sq ft
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <p className="text-sm text-gray-500">
                  Doors & Windows
                </p>

                <p className="mt-2 text-2xl font-bold text-gray-900">
                  {(result.doorArea + result.windowArea).toFixed(1)}{" "}
                  sq ft
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <p className="text-sm text-gray-500">
                  Ceiling Area
                </p>

                <p className="mt-2 text-2xl font-bold text-gray-900">
                  {result.ceilingArea.toFixed(1)} sq ft
                </p>
              </div>

              <div className="rounded-2xl bg-gray-900 p-5 sm:col-span-2 lg:col-span-3">
                <p className="text-sm text-gray-300">
                  Total Paintable Area
                </p>

                <p className="mt-2 text-3xl font-bold text-white">
                  {result.totalPaintableArea.toFixed(1)} sq ft
                </p>
              </div>
            </div>

            {/* Material Estimates */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-900">
                Approximate Material
              </h3>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                {/* Paint */}
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold text-gray-500">
                    Paint
                  </p>

                  <p className="mt-2 text-3xl font-bold text-gray-900">
                    {result.paintEstimate} L
                  </p>

                  <p className="mt-2 text-xs text-gray-500">
                    Assumed: approximately 2 coats
                  </p>
                </div>

                {/* Primer */}
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold text-gray-500">
                    Primer
                  </p>

                  <p className="mt-2 text-3xl font-bold text-gray-900">
                    {result.primerEstimate} L
                  </p>

                  <p className="mt-2 text-xs text-gray-500">
                    Assumed: approximately 1 coat
                  </p>
                </div>

                {/* Putty */}
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold text-gray-500">
                    Wall Putty
                  </p>

                  <p className="mt-2 text-3xl font-bold text-gray-900">
                    {result.puttyEstimate} kg
                  </p>

                  <p className="mt-2 text-xs text-gray-500">
                    Assumed: approximately 1 coat
                  </p>
                </div>
              </div>
            </div>

            {/* Assumptions */}
            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="text-sm font-bold text-gray-900">
                Calculation Assumptions
              </h3>

              <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-600">
                <li>
                  • Paint coverage assumption: approximately 120 sq ft/L
                  per coat
                </li>

                <li>
                  • Primer coverage assumption: approximately 150 sq ft/L
                  per coat
                </li>

                <li>
                  • Wall putty coverage assumption: approximately 15 sq ft/kg
                  per coat
                </li>

                <li>
                  • Paint: 2 coats, Primer: 1 coat, Putty: 1 coat
                </li>
              </ul>
            </div>

            {/* Important Disclaimer */}
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                  !
                </div>

                <div>
                  <p className="text-sm font-bold text-amber-900">
                    Important: Approximate Estimate Only
                  </p>

                  <p className="mt-2 text-sm leading-6 text-amber-800">
                    These quantities are approximate planning estimates
                    only. Actual material consumption can vary depending
                    on the product, surface condition, number of coats,
                    application method, dilution with water, thinner or
                    oil where applicable, wastage, and painter/application
                    practices.
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-amber-900">
                    Please confirm the actual requirement with your painter
                    or painting professional before purchasing.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default PaintCalculator;