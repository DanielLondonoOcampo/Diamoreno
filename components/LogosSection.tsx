import Image from 'next/image'

const logos = [
  { src: '/images/logo1.jpeg', alt: 'Logo 1' },
  { src: '/images/logo2.jpeg', alt: 'Logo 2' },
  { src: '/images/logo-fondo-emprender.png', alt: 'Fondo Emprender' },
]

export default function LogosSection() {
  return (
    <section className="bg-brand-cream py-12 border-y border-brand-cream-dark">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={80}
                className="h-16 md:h-20 w-auto object-contain"
                sizes="(max-width: 768px) 100px, 150px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
