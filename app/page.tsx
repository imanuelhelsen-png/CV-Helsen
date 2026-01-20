export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* NAVBAR SEDERHANA */}
      <nav className="fixed w-full z-20 top-0 start-0 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Portofolio Saya
          </span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto pt-32 px-5 pb-20">
        
        {/* HERO SECTION (Bagian Atas) */}
        <section className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mb-6">
            <div className="bg-slate-900 rounded-full p-2">
              <span className="text-4xl">👨‍💻</span> {/* Ganti dengan tag <img /> jika ada foto */}
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
            Hi, Saya <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Helsen Khores</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Seorang Web Developer yang fokus menciptakan pengalaman digital yang cepat, responsif, dan mudah digunakan. 
            Saat ini sedang mendalami <span className="text-cyan-400 font-semibold">Next.js</span>.
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition transform hover:scale-105 shadow-lg shadow-blue-500/30">
              Hubungi Saya
            </button>
            <button className="px-6 py-3 rounded-full border border-slate-700 hover:bg-slate-800 text-slate-300 font-semibold transition">
              Lihat Proyek
            </button>
          </div>
        </section>

        {/* SECTION: SKILLS (Kartu Kaca/Glassmorphism) */}
        <section className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { title: "Next.js", desc: "Framework React untuk web modern", icon: "⚡" },
            { title: "Tailwind CSS", desc: "Styling cepat & responsif", icon: "🎨" },
            { title: "TypeScript", desc: "Kode lebih aman & terstruktur", icon: "🛡️" },
          ].map((item, index) => (
            <div key={index} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition duration-300 hover:bg-slate-800">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* SECTION: PENGALAMAN */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-cyan-500 pl-4">
            Pengalaman
          </h2>
          <div className="border-l border-slate-700 ml-2 space-y-10 pl-8 relative">
            {/* Item 1 */}
            <div className="relative">
              <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-cyan-500"></span>
              <h3 className="text-xl font-bold text-white">Freelance Web Developer</h3>
              <span className="text-sm text-cyan-400 mb-2 block">2024 - Sekarang</span>
              <p className="text-slate-400">
                Mengerjakan berbagai proyek website UMKM menggunakan teknologi modern, meningkatkan performa website klien hingga 40%.
              </p>
            </div>
            {/* Item 2 */}
            <div className="relative">
              <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-slate-600"></span>
              <h3 className="text-xl font-bold text-white">Belajar Next.js</h3>
              <span className="text-sm text-cyan-400 mb-2 block">2023 - 2024</span>
              <p className="text-slate-400">
                Mengikuti bootcamp dan tutorial online untuk mendalami React, Next.js, dan manajemen state.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        <p>© 2025 Newton. Dibuat dengan Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}