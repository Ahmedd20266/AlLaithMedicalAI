export default function Departments() {
  return (
    <section id="departments" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Medical Departments
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-12">
          Our specialized clinics provide comprehensive healthcare.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-blue-50 rounded-2xl p-8 shadow">
            <div className="text-5xl">🦷</div>
            <h3 className="text-xl font-bold mt-5">Dental Clinic</h3>
            <p className="mt-3 text-gray-600">
              General dentistry and cosmetic treatments.
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 shadow">
            <div className="text-5xl">👶</div>
            <h3 className="text-xl font-bold mt-5">Pediatrics</h3>
            <p className="mt-3 text-gray-600">
              Healthcare services for infants and children.
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 shadow">
            <div className="text-5xl">🩺</div>
            <h3 className="text-xl font-bold mt-5">Internal Medicine</h3>
            <p className="mt-3 text-gray-600">
              Diagnosis and treatment of medical conditions.
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 shadow">
            <div className="text-5xl">🤰</div>
            <h3 className="text-xl font-bold mt-5">
              Obstetrics & Gynecology
            </h3>
            <p className="mt-3 text-gray-600">
              Women's healthcare and pregnancy follow-up.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}