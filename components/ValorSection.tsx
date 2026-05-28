const pillars = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: '100% Natural',
    desc: 'Fruta colombiana Categoría Premium seleccionada en su punto óptimo. Sin aditivos, colorantes ni azúcares añadidos.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Sabor Ancestral',
    desc: 'Deshidratación artesanal con baño de sol que respeta el tiempo del producto, preservando la intensidad del sabor auténtico sin químicos.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Rico en fibra',
    desc: 'Concentrado natural de vitaminas, minerales y fibra dietaria. Energía real, sin rellenos ni fruta de descarte.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Visión Sostenible',
    desc: 'Sello Negocio Verde Cornare. Cada venta apoya directamente el trabajo de mujeres rurales del Oriente Antioqueño.',
  },
]

export default function ValorSection() {
  return (
    <section className="bg-brand-cream-dark py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="section-title mb-3">¿Por qué DiaMoreno?</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            El snack que respeta tu salud y el sabor auténtico de la fruta colombiana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-7 text-center shadow-sm hover:shadow-md transition-shadow duration-200 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-cream text-brand-green mb-5 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                {p.icon}
              </div>
              <h3 className="font-display text-xl text-brand-green font-semibold mb-2">{p.title}</h3>
              <p className="font-sans text-brand-muted text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Reconocimientos */}
        <div className="mt-12 pt-10 border-t border-brand-cream">
          <p className="text-center font-sans text-xs text-brand-muted uppercase tracking-widest mb-5">Reconocimientos & Certificaciones</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Notificación INVIMA',
              'Sello Negocio Verde · Cornare',
              'Sello Oriente Región que Enamora',
              'Ganadora Fondo Emprender 2025',
              'Incentivo Cornare · Alcaldía El Peñol',
            ].map((cert) => (
              <span
                key={cert}
                className="font-sans text-sm font-medium text-brand-green border border-brand-green/30 bg-white rounded-full px-4 py-1.5"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
