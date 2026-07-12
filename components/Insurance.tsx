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
    <section id="insurance" className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Insurance Partners
          </h2>

          <p className="text-2xl text-blue-300 mt-3">
            شركات التأمين المعتمدة
          </p>

          <p className="text-gray-400 mt-4">
            We proudly cooperate with leading health insurance companies across Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {companies.map((company) => (
            <div
              key={company}
              className="bg-slate-800 rounded-2xl p-8 text-center shadow-lg hover:bg-sky-700 hover:scale-105 transition duration-300"
            >
              <h3 className="text-white text-xl font-bold">
                {company}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}