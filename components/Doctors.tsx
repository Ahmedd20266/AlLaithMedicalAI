export default function Doctors() {
  const doctors = [
    {
      name: "د. مصطفى محمد ناصر",
      title: "أخصائي",
      specialty: "طب الأطفال",
      icon: "👨‍⚕️",
    },
    {
      name: "د. مصطفى أحمد مصطفى",
      title: "طبيب مقيم",
      specialty: "الأمراض الصدرية",
      icon: "👨‍⚕️",
    },
    {
      name: "د. محمد سليمان علي",
      title: "طبيب عام",
      specialty: "الطب العام",
      icon: "👨‍⚕️",
    },
    {
      name: "د. أسماء سمير أحمد",
      title: "طبيبة عامة",
      specialty: "الطب العام",
      icon: "👩‍⚕️",
    },
    {
      name: "د. ليلى عبدالمنعم الإبراشي",
      title: "أخصائي",
      specialty: "طب الأسنان",
      icon: "👩‍⚕️",
    },
    {
      name: "د. فاطمة رمضان معوض",
      title: "أخصائي",
      specialty: "النساء والولادة",
      icon: "👩‍⚕️",
    },
  ];

  return (
    <section id="doctors" className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-sky-700">
            Our Doctors
          </h2>

          <p className="text-gray-700 mt-3 text-xl">
            نخبة من الأطباء ذوي الخبرة لخدمتكم
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-7xl mb-5">
                {doctor.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-extrabold text-black leading-relaxed">
                {doctor.name}
              </h3>

              <p className="text-sky-700 font-bold text-lg mt-3">
                {doctor.title}
              </p>

              <p className="text-gray-800 text-lg mt-2">
                {doctor.specialty}
              </p>

              <a
                href="#appointment"
                className="mt-8 inline-block bg-sky-700 hover:bg-sky-800 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300"
              >
                Book Appointment
              </a>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}