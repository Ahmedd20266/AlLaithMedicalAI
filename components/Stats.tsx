export default function Stats() {
  const stats = [
    {
      number: "6+",
      title: "Doctors",
      arabic: "أطباء",
      icon: "👨‍⚕️",
    },
    {
      number: "6",
      title: "Departments",
      arabic: "الأقسام",
      icon: "🏥",
    },
    {
      number: "12+",
      title: "Insurance Companies",
      arabic: "شركات التأمين",
      icon: "🛡️",
    },
    {
      number: "10000+",
      title: "Happy Patients",
      arabic: "مريض",
      icon: "😊",
    },
  ];

  return (
    <section className="bg-sky-700 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.title}
              className="text-center text-white"
            >
              <div className="text-6xl mb-4">
                {item.icon}
              </div>

              <h2 className="text-5xl font-bold">
                {item.number}
              </h2>

              <p className="mt-3 text-xl">
                {item.title}
              </p>

              <p className="text-blue-100">
                {item.arabic}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}