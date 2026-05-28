'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const testimonios = [
  {
    nombre: 'Laura M.',
    ciudad: 'Bogotá',
    texto:
      'Los mejores snacks que he probado. El mango deshidratado es adictivo y saber que no tiene conservantes me da mucha tranquilidad para dárselo a mis hijos.',
    avatar: '/images/servido-persona.jpg',
    estrellas: 5,
  },
  {
    nombre: 'Carlos R.',
    ciudad: 'Medellín',
    texto:
      'Llevo tres meses pidiendo cada semana. La calidad es consistente y el sabor es increíble. La mezcla de frutas es mi favorita para el desayuno con yogur.',
    avatar: '/images/servido-miel.jpg',
    estrellas: 5,
  },
  {
    nombre: 'Valentina P.',
    ciudad: 'Cali',
    texto:
      'Los pedí primero para regalos corporativos y quedaron espectaculares. La presentación es muy profesional y el producto habla por sí solo.',
    avatar: '/images/servido-plato.jpg',
    estrellas: 5,
  },
  {
    nombre: 'Andrés F.',
    ciudad: 'Bucaramanga',
    texto:
      'Me los recomendaron en el gym como snack pre-entrenamiento. Son la combinación perfecta de sabor y nutrición sin culpa.',
    avatar: '/images/hero-principal.jpg',
    estrellas: 5,
  },
]

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const total = testimonios.length

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])
  const prev = () => setCurrent((c) => (c - 1 + total) % total)

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section id="clientes" className="py-20 md:py-28 bg-brand-cream-dark">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="section-title mb-3">Clientes satisfechos</h2>
          <p className="section-subtitle">Lo que dicen quienes ya disfrutan DiaMoreno.</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonios.map((t) => (
                <div
                  key={t.nombre}
                  className="min-w-full bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-brand-gold/20">
                      <Image
                        src={t.avatar}
                        alt={t.nombre}
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                  </div>
                  <div>
                    <Stars n={t.estrellas} />
                    <p className="font-display text-xl md:text-2xl text-brand-brown italic mt-3 mb-4 leading-relaxed">
                      &ldquo;{t.texto}&rdquo;
                    </p>
                    <p className="font-sans font-semibold text-brand-green">{t.nombre}</p>
                    <p className="font-sans text-sm text-brand-muted">{t.ciudad}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-brand-green hover:bg-brand-cream transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Siguiente"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-brand-green hover:bg-brand-cream transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-7">
          {testimonios.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-brand-gold' : 'w-2 bg-brand-muted/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
