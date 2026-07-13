export default function Insurance() {
  const companies = [
    "Bupa",
    "Tawuniya",
    "MedGulf",
    "NextCare",
    "Takaful Al Rajhi",
    "GlobeMed",
    "T.C.S",
    "Malath",
    "Arabian Shield",
    "Walaa",
    "Gulf Union",
    "Gulf Insurance (GIG)",
  ];

  return (
    <section id="insurance" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-sky-700">
            Insurance Partners
          </h2>

          <p className="text-2xl text-gray-700 mt-3">
            شركات التأمين المعتمدة
          </p>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            We proudly cooperate with leading health insurance companies across Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {companies.map((company) => (
            <div
              key={company}
              className="bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-sky-700 text-xl font-bold">
                {company}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}