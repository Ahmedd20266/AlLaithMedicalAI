export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <div>
          <h1 className="text-2xl font-bold text-sky-700">
            Al Laith Medical Complex
          </h1>

          <p className="text-xs text-gray-500">
            مجمع الليث الطبي العام
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <a href="#home" className="hover:text-sky-700 transition">
            Home
          </a>

          <a href="#about" className="hover:text-sky-700 transition">
            About
          </a>

          <a href="#departments" className="hover:text-sky-700 transition">
            Departments
          </a>

          <a href="#doctors" className="hover:text-sky-700 transition">
            Doctors
          </a>

          <a href="#insurance" className="hover:text-sky-700 transition">
            Insurance
          </a>

          <a href="#contact" className="hover:text-sky-700 transition">
            Contact
          </a>

        </nav>

        <a
          href="#appointment"
          className="bg-sky-700 text-white px-5 py-2 rounded-lg hover:bg-sky-800 transition"
        >
          Book Appointment
        </a>

      </div>
    </header>
  );
}