export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-sky-800 via-sky-700 to-sky-600"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">

        {/* Left Side */}

        <div>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Al Laith Medical Complex
          </h1>

          <h2 className="text-3xl text-sky-100 mt-4">
            مجمع الليث المتكامل الطبي العام
          </h2>

          <p className="text-white/90 mt-8 text-xl leading-9">
            Comprehensive healthcare with experienced physicians,
            advanced medical equipment, trusted insurance partners,
            and compassionate patient care.
          </p>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <img
            src="/images/hospital.jpg"
            alt="Al Laith Medical Complex"
            className="w-full h-[520px] rounded-3xl shadow-2xl object-cover"
          />

        </div>

      </div>
    </section>
  );
}