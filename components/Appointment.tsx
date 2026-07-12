export default function Appointment() {
  return (
    <section id="appointment" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-sky-700">
            Book an Appointment
          </h2>

          <p className="text-2xl text-gray-700 mt-3">
            احجز موعدك الآن
          </p>

          <p className="text-gray-500 mt-4">
            Fill out the form below and our team will contact you as soon as possible.
          </p>
        </div>

        <div className="bg-slate-100 rounded-3xl shadow-xl p-10">

          <form className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-semibold">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Mobile Number
              </label>

              <input
                type="tel"
                placeholder="05XXXXXXXX"
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Department
              </label>

              <select className="w-full p-4 rounded-xl border border-gray-300">
                <option>General Medicine</option>
                <option>Dental Clinic</option>
                <option>Pediatrics</option>
                <option>Internal Medicine</option>
                <option>Obstetrics & Gynecology</option>
                <option>Chest Clinic</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Doctor
              </label>

              <select className="w-full p-4 rounded-xl border border-gray-300">
                <option>Choose Doctor</option>
                <option>Dr. Mustafa Mohamed Nasser</option>
                <option>Dr. Mustafa Ahmed Mostafa</option>
                <option>Dr. Mohamed Soliman Ali</option>
                <option>Dr. Asmaa Samir Ahmed</option>
                <option>Dr. Laila Abdelmonem</option>
                <option>Dr. Fatma Ramadan</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Appointment Date
              </label>

              <input
                type="date"
                className="w-full p-4 rounded-xl border border-gray-300"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Preferred Time
              </label>

              <input
                type="time"
                className="w-full p-4 rounded-xl border border-gray-300"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-semibold">
                Notes
              </label>

              <textarea
                rows={5}
                placeholder="Write any notes..."
                className="w-full p-4 rounded-xl border border-gray-300"
              ></textarea>
            </div>

            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="bg-sky-700 hover:bg-sky-800 text-white px-10 py-4 rounded-xl text-lg font-semibold transition"
              >
                Book Appointment
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}