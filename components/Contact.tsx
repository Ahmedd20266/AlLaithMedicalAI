export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-sky-700">
            Contact & Location
          </h2>

          <p className="text-2xl text-gray-700 mt-3">
            تواصل معنا
          </p>

          <p className="text-gray-600 mt-4">
            We are always happy to serve you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-slate-50 rounded-3xl p-10 shadow-lg border border-slate-200">

            <h3 className="text-3xl font-bold text-sky-700 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 text-lg">

              <div>
                <p className="text-sky-700 font-semibold">📍 Address</p>
                <p className="text-gray-700">
                  Al Lith - King Faisal Road
                </p>
              </div>

              <div>
                <p className="text-sky-700 font-semibold">☎ Telephone</p>
                <p className="text-gray-700">
                  0177423447
                </p>
              </div>

              <div>
                <p className="text-sky-700 font-semibold">📱 Mobile</p>
                <p className="text-gray-700">
                  0177420806
                </p>
              </div>

              <div>
                <p className="text-sky-700 font-semibold">📠 Fax</p>
                <p className="text-gray-700">
                  0177424031
                </p>
              </div>

              <div>
                <p className="text-sky-700 font-semibold">🕒 Working Hours</p>
                <p className="text-gray-700">
                  Daily from 8:00 AM until 1:00 AM
                </p>
              </div>

            </div>

          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">

            <iframe
              src="https://www.google.com/maps?q=Al+Laith+Medical+Complex&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}