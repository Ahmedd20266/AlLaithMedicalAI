export default function Footer() {
  return (
    <footer className="bg-sky-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* Medical Complex */}

        <div>

          <h2 className="text-3xl font-bold">
            Al Laith Medical Complex
          </h2>

          <p className="mt-3 text-sky-100 text-lg">
            مجمع الليث المتكامل الطبي العام
          </p>

          <div className="mt-8 space-y-3 text-sky-100">

            <p>📍 Al Lith - King Faisal Road</p>

            <p>☎ 0177423447</p>

            <p>☎ 0177420806</p>

            <p>☎ 0177420807</p>

            <p>📠 0177424031</p>

            <p>🕒 Daily: 8:00 AM - 1:00 AM</p>

          </div>

        </div>

        {/* Quick Links */}

        <div>

          <h2 className="text-3xl font-bold">
            Quick Links
          </h2>

          <ul className="mt-8 space-y-4">

            <li>
              <a href="#home" className="hover:text-yellow-300 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-yellow-300 transition">
                About Us
              </a>
            </li>

            <li>
              <a href="#departments" className="hover:text-yellow-300 transition">
                Departments
              </a>
            </li>

            <li>
              <a href="#doctors" className="hover:text-yellow-300 transition">
                Doctors
              </a>
            </li>

            <li>
              <a href="#insurance" className="hover:text-yellow-300 transition">
                Insurance
              </a>
            </li>

            <li>
              <a href="#appointment" className="hover:text-yellow-300 transition">
                Book Appointment
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-yellow-300 transition">
                Contact Us
              </a>
            </li>

          </ul>

        </div>

        {/* Working Hours */}

        <div>

          <h2 className="text-3xl font-bold">
            Working Hours
          </h2>

          <div className="mt-8 space-y-4 text-sky-100">

            <p>Saturday - Friday</p>

            <p>8:00 AM - 1:00 AM</p>

            <p className="leading-7">
              We are committed to providing high-quality healthcare with experienced physicians, advanced medical services, and compassionate patient care.
            </p>

          </div>

        </div>

      </div>

      <div className="border-t border-sky-700 py-6 text-center text-sky-100">

        © 2026 Al Laith Medical Complex <br />
        All Rights Reserved.

      </div>

    </footer>
  );
}