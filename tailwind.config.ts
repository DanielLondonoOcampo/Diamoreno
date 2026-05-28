import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green:      '#2D5016',
          'green-light': '#3D6B20',
          gold:       '#B8940A',
          'gold-light': '#D4AE30',
          cream:      '#FAF6EE',
          'cream-dark': '#F0E8D8',
          brown:      '#2C1A0E',
          muted:      '#7A6652',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)',
      },
    },
  },
  plugins: [],
}

export default config
