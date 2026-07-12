export default function Hero() {
  return (
    <section id="home" className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-6xl font-bold text-white">
            Al Laith Medical Complex
          </h1>

          <p className="text-3xl text-blue-200 mt-4">
            مجمع الليث المتكامل الطبي العام
          </p>

          <p className="text-gray-300 mt-8 text-xl">
            Comprehensive healthcare with experienced physicians,
            advanced medical services and trusted insurance partners.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl">
              Book Appointment
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-xl">
              Contact Us
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/hospital.jpg"
            alt="Al Laith Medical Complex"
            className="rounded-3xl shadow-2xl object-cover w-full h-[450px]"
          />
        </div>
      </div>
    </section>
  );
}