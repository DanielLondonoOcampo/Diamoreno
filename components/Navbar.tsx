'use client'

import { useState, useEffect } from 'react'
import Image from '@/components/AppImage'

const links = [
  { label: 'Inicio',    href: '#inicio' },
  { label: 'Productos', href: '#productos' },
  { label: 'Proceso',   href: '#proceso' },
  { label: 'Clientes',  href: '#clientes' },
  { label: 'Contacto',  href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav('#inicio')} className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="DiaMoreno Deshidratados"
            width={170}
            height={64}
            className="object-contain h-12 w-auto"
            priority
          />
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className={`font-sans text-sm font-medium transition-colors duration-200 hover:text-brand-gold ${
                  scrolled ? 'text-brand-brown' : 'text-white drop-shadow'
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/573142923044?text=Hola,%20quiero%20pedir%20fruta%20deshidratada%20DiaMoreno.%20%C2%BFMe%20pueden%20ayudar%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-sans font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200 shadow hover:shadow-md"
        >
          Pedir ahora
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          className="md:hidden flex flex-col gap-1.5 p-1"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-0.5 w-6 transition-all duration-200 ${
                scrolled ? 'bg-brand-brown' : 'bg-white'
              }`}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/97 backdrop-blur-sm border-t border-brand-cream-dark px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="font-sans text-brand-brown font-medium text-left hover:text-brand-gold transition-colors"
            >
              {l.label}
            </button>
          ))}
          <a
            href="https://wa.me/573142923044?text=Hola,%20quiero%20pedir%20fruta%20deshidratada%20DiaMoreno.%20%C2%BFMe%20pueden%20ayudar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center mt-2"
          >
            Pedir ahora
          </a>
        </div>
      )}
    </header>
  )
}
