export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* Medical Complex */}

        <div>

          <h2 className="text-2xl font-bold text-sky-400">
            Al Laith Medical Complex
          </h2>

          <p className="mt-3 text-gray-300">
            مجمع الليث المتكامل الطبي العام
          </p>

          <div className="mt-8 space-y-3 text-gray-400">

            <p>📍 Al Lith - King Faisal Street 7093</p>

            <p>☎ 0177423447</p>

            <p>☎ 0177420806</p>

            <p>☎ 0177420807</p>

            <p>📠 0177424031</p>

            <p>🕒 Daily: 8:00 AM - 1:00 AM</p>

          </div>

        </div>

        {/* Quick Links */}

        <div>

          <h2 className="text-2xl font-bold text-sky-400">
            Quick Links
          </h2>

          <ul className="mt-8 space-y-4 text-gray-300">

            <li>Home</li>

            <li>About Us</li>

            <li>Departments</li>

            <li>Doctors</li>

            <li>Insurance</li>

            <li>Book Appointment</li>

            <li>Contact Us</li>

          </ul>

        </div>

        {/* Working Hours */}

        <div>

          <h2 className="text-2xl font-bold text-sky-400">
            Working Hours
          </h2>

          <div className="mt-8 text-gray-300 space-y-3">

            <p>Saturday - Friday</p>

            <p>8:00 AM - 1:00 AM</p>

            <p className="mt-6">
              We are committed to providing high-quality healthcare with experienced physicians and advanced medical services.
            </p>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800 py-6 text-center text-gray-400">

        © 2026 Al Laith Medical Complex
        <br />
        All Rights Reserved.

      </div>

    </footer>
  );
}