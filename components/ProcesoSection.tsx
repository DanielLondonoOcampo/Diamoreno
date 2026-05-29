import Image from 'next/image'

const pasos = [
  {
    num: '01',
    titulo: 'Selección',
    desc: 'Solo fruta fresca colombiana en su punto óptimo de maduración.',
  },
  {
    num: '02',
    titulo: 'Deshidratación',
    desc: 'Proceso controlado a baja temperatura para preservar sabor y nutrientes.',
  },
  {
    num: '03',
    titulo: 'Empaque',
    desc: 'Bolsas resellables con estándares de higiene y calidad que garantizan frescura.',
  },
]

export default function ProcesoSection() {
  return (
    <section id="proceso" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            <h2 className="section-title mb-4">Del campo a tu mesa</h2>
            <p className="section-subtitle mb-10">
              Un proceso artesanal y cuidadoso que respeta la integridad de cada fruta.
            </p>

            <div className="flex flex-col gap-8">
              {pasos.map((p) => (
                <div key={p.num} className="flex gap-5">
                  <span className="font-display text-5xl text-brand-gold/30 font-bold leading-none flex-shrink-0 w-12">
                    {p.num}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-brand-green mb-1">{p.titulo}</h3>
                    <p className="font-sans text-brand-muted leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images side */}
          <div className="grid grid-cols-2 gap-4 h-[480px]">
            <div className="relative rounded-2xl overflow-hidden row-span-2">
              <Image
                src="/images/proceso-trabajadora.jpg"
                alt="Trabajadora DiaMoreno en proceso de deshidratación"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/proceso-bandejas.jpg"
                alt="Bandejas de mango en deshidratador"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/servido-miel.jpg"
                alt="Fruta deshidratada DiaMoreno con miel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
