import Image from 'next/image'

const navLinks = [
  { label: 'Inicio',    href: '#inicio' },
  { label: 'Productos', href: '#productos' },
  { label: 'Proceso',   href: '#proceso' },
  { label: 'Clientes',  href: '#clientes' },
  { label: 'Contacto',  href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-white/70">
      <div className="max-w-6xl mx-auto px-5 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <Image
            src="/images/logo.png"
            alt="DíaMoreno Deshidratados"
            width={140}
            height={52}
            className="h-12 w-auto object-contain mb-4"
          />
          <p className="font-sans text-sm leading-relaxed">
            Fruta colombiana deshidratada, procesada con amor y sin conservantes.
          </p>
        </div>

        {/* Nav */}
        <div>
          <h4 className="font-display text-white text-lg mb-4">Navegación</h4>
          <ul className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-sans text-sm hover:text-brand-gold transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-white text-lg mb-4">Contacto</h4>
          <div className="flex flex-col gap-3 font-sans text-sm">
            <a
              href="https://wa.me/573142923044?text=Hola,%20quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos%20DíaMoreno."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-brand-gold transition-colors duration-200"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              +57 314 292 3044
            </a>
            <span className="text-white/40">Colombia</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs font-sans text-white/40">
          <span>© {new Date().getFullYear()} DíaMoreno Deshidratados. Todos los derechos reservados.</span>
          <span>Hecho con ❤ en Colombia</span>
        </div>
      </div>
    </footer>
  )
}
