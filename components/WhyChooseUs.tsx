export default function WhyChooseUs() {
  const features = [
    {
      icon: "🏥",
      title: "Comprehensive Healthcare",
      subtitle: "رعاية صحية متكاملة",
      description:
        "Comprehensive medical services with specialized clinics for the whole family.",
    },
    {
      icon: "👨‍⚕️",
      title: "Experienced Doctors",
      subtitle: "أطباء ذوو خبرة",
      description:
        "Qualified physicians committed to providing high-quality healthcare.",
    },
    {
      icon: "🩺",
      title: "Modern Medical Equipment",
      subtitle: "أجهزة وتقنيات حديثة",
      description:
        "Advanced medical technologies for accurate diagnosis and treatment.",
    },
    {
      icon: "🕒",
      title: "Extended Working Hours",
      subtitle: "ساعات عمل ممتدة",
      description:
        "Daily from 8:00 AM until 1:00 AM for your convenience.",
    },
    {
      icon: "🛡️",
      title: "Insurance Partners",
      subtitle: "شركات تأمين معتمدة",
      description:
        "We cooperate with major health insurance providers.",
    },
    {
      icon: "❤️",
      title: "Patient-Centered Care",
      subtitle: "رعاية تتمحور حول المريض",
      description:
        "Your comfort, safety and satisfaction are our highest priorities.",
    },
  ];

  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-sky-700">
            Why Choose Al Laith Medical Complex
          </h2>

          <p className="text-2xl text-gray-700 mt-3">
            لماذا تختار مجمع الليث المتكامل الطبي العام؟
          </p>

          <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
            We are committed to providing high-quality healthcare through
            experienced physicians, advanced medical services and trusted care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="text-sky-700 font-semibold mt-2">
                {feature.subtitle}
              </p>

              <p className="text-gray-600 mt-4 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}