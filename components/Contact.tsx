export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Contact & Location
          </h2>

          <p className="text-2xl text-blue-300 mt-3">
            تواصل معنا
          </p>

          <p className="text-gray-400 mt-4">
            We are always happy to serve you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}

          <div className="bg-slate-800 rounded-3xl p-10 shadow-xl">

            <h3 className="text-3xl font-bold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 text-lg">

              <div>
                <p className="text-sky-400 font-semibold">📍 Address</p>
                <p className="text-gray-300">
                  Al Lith - King Faisal Road
                </p>
              </div>

              <div>
                <p className="text-sky-400 font-semibold">☎ Telephone</p>
                <p className="text-gray-300">
                  0177423447
                </p>
              </div>

              <div>
                <p className="text-sky-400 font-semibold">📱 Mobile</p>
                <p className="text-gray-300">
                  0177420806
                </p>
              </div>

              <div>
                <p className="text-sky-400 font-semibold">📠 Fax</p>
                <p className="text-gray-300">
                  0177424031
                </p>
              </div>

              <div>
                <p className="text-sky-400 font-semibold">🕒 Working Hours</p>
                <p className="text-gray-300">
                  Daily from 8:00 AM until 1:00 AM
                </p>
              </div>

            </div>

          </div>

          {/* Google Map */}

          <div className="rounded-3xl overflow-hidden shadow-xl">

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