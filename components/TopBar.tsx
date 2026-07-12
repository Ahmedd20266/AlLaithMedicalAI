export default function TopBar() {
  return (
    <div className="bg-sky-800 text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col md:flex-row justify-between items-center gap-2">

        <div className="flex flex-wrap items-center gap-6">
          <span>📞 0177423447</span>
          <span>☎️ 0177420806</span>
          <span>☎️ 0177420807</span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <span>📍 Al Lith - King Faisal Street 7093</span>
          <span>🕒 8:00 AM - 1:00 AM</span>
          <button className="hover:underline">
            العربية | English
          </button>
        </div>

      </div>
    </div>
  );
}