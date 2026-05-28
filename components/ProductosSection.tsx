import Image from 'next/image'

const precios = [
  { g: '25 g', precio: '$10.000' },
  { g: '50 g', precio: '$15.000' },
  { g: '90 g', precio: '$25.000' },
  { g: '200 g', precio: '$50.000' },
]

const productos = [
  {
    img: '/images/producto-mezcla.jpg',
    nombre: 'Mezcla de frutas',
    descripcion: 'Fresa, manzana, mango, higo y más. Mezcla conceptual de autor con frutas amarillas y rojas seleccionadas.',
    tag: 'El más popular',
    waHref: 'https://wa.me/573142923044?text=Hola,%20me%20interesa%20la%20Mezcla%20de%20frutas%20deshidratada%20DiaMoreno.%20%C2%BFQu%C3%A9%20presentaciones%20tienen%20disponibles%3F',
  },
  {
    img: '/images/producto-mango.jpg',
    nombre: 'Mango deshidratado',
    descripcion: 'Rebanadas de mango Tommy seleccionadas en su punto exacto de madurez. Sabor concentrado, sin añadidos.',
    tag: 'Clásico',
    waHref: 'https://wa.me/573142923044?text=Hola,%20me%20interesa%20el%20Mango%20deshidratado%20DiaMoreno.%20%C2%BFQu%C3%A9%20presentaciones%20tienen%20disponibles%3F',
  },
  {
    img: '/images/producto-citricos.jpg',
    nombre: 'Cítricos deshidratados',
    descripcion: 'Rodajas de naranja y limón. Perfectas para decorar, infusionar o snackear.',
    tag: 'Especial',
    waHref: 'https://wa.me/573142923044?text=Hola,%20me%20interesan%20los%20C%C3%ADtricos%20deshidratados%20DiaMoreno.%20%C2%BFQu%C3%A9%20presentaciones%20tienen%20disponibles%3F',
  },
]

export default function ProductosSection() {
  return (
    <section id="productos" className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="section-title mb-3">Nuestros productos</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Fruta colombiana deshidratada al natural, disponible en presentaciones de 25 g, 50 g, 90 g y 200 g.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productos.map((p) => (
            <div
              key={p.nombre}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.nombre}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-4 left-4 bg-brand-gold text-white text-xs font-sans font-semibold px-3 py-1 rounded-full">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-brand-green mb-2">{p.nombre}</h3>
                <p className="font-sans text-brand-muted text-sm leading-relaxed mb-4">{p.descripcion}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {precios.map(({ g, precio }) => (
                    <span key={g} className="font-sans text-xs bg-brand-cream text-brand-brown rounded-full px-3 py-1">
                      {g} · {precio}
                    </span>
                  ))}
                </div>
                <a
                  href={p.waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-green hover:text-brand-gold font-sans font-semibold text-sm transition-colors duration-200"
                >
                  Hacer pedido
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Serving suggestion */}
        <div className="mt-16 rounded-3xl overflow-hidden bg-brand-green relative">
          <div className="absolute inset-0">
            <Image
              src="/images/servido-plato.jpg"
              alt="Fruta deshidratada DiaMoreno servida"
              fill
              className="object-cover object-center opacity-30"
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-lg">
              <h3 className="font-display text-3xl md:text-4xl mb-3">Versátil y delicioso</h3>
              <p className="font-sans text-white/80 leading-relaxed">
                Úsalos en yogur, avena, ensaladas, postres o simplemente solos. La textura crujiente y
                el sabor concentrado hacen que cada bocado sea especial.
              </p>
            </div>
            <a
              href="https://wa.me/573142923044?text=Hola,%20quiero%20pedir%20fruta%20deshidratada%20DiaMoreno%20para%20usar%20en%20mis%20recetas.%20%C2%BFQu%C3%A9%20opciones%20tienen%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-sans font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg"
            >
              Hacer pedido
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
