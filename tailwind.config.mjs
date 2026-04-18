/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        tierra:  { DEFAULT: '#2B1A0C', light: '#3E2614', soft: '#5C3A1E' },
        corteza: { DEFAULT: '#5C3A1E', light: '#7A4F2B' },
        almendra:{ DEFAULT: '#C9965B', light: '#DDB17A', pale: '#F1DFC2', cream: '#F7E9D0' },
        nuez:    { DEFAULT: '#8B6340', light: '#A67C52', dark: '#5E4129' },
        hoja:    { DEFAULT: '#4A6741', light: '#6B8F62', dark: '#344B2F' },
        oliva:   { DEFAULT: '#8A9A5B', light: '#A8B77F' },
        crema:   { DEFAULT: '#FBF6EE', dark: '#F0E7D5', warm: '#F6ECD8' },
        arena:   { DEFAULT: '#EADFC9', light: '#F2E9D6' },
        piedra:  { DEFAULT: '#B8A898', light: '#CEC0AE' },
        sol:     { DEFAULT: '#E4A853', light: '#F1C27D' },
      },
      fontFamily: {
        display: ['"Fraunces"', '"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"Inter"', '"DM Sans"', 'system-ui', 'sans-serif'],
        hand:    ['"Caveat"', 'cursive'],
      },
      fontSize: {
        '5xl': ['3rem',    { lineHeight: '1.08' }],
        '6xl': ['3.75rem', { lineHeight: '1.04' }],
        '7xl': ['4.5rem',  { lineHeight: '1' }],
        '8xl': ['5.75rem', { lineHeight: '.98' }],
      },
      backgroundImage: {
        'grano': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        'sunray': 'radial-gradient(ellipse at top, rgba(228,168,83,.25), transparent 55%)',
      },
      animation: {
        'fade-up':   'fadeUp .85s cubic-bezier(.22,1,.36,1) both',
        'fade-in':   'fadeIn .6s ease both',
        'marquee':   'marquee 38s linear infinite',
        'float':     'float 6s ease-in-out infinite',
        'spin-slow': 'spin 22s linear infinite',
      },
      keyframes: {
        fadeUp:  { from:{ opacity:'0', transform:'translateY(24px)' }, to:{ opacity:'1', transform:'translateY(0)' } },
        fadeIn:  { from:{ opacity:'0' }, to:{ opacity:'1' } },
        marquee: { from:{ transform:'translateX(0)' }, to:{ transform:'translateX(-50%)' } },
        float:   { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-14px)' } },
      },
      boxShadow: {
        'warm':      '0 8px 32px rgba(43,26,12,.12)',
        'warm-lg':   '0 24px 60px rgba(43,26,12,.18)',
        'card':      '0 2px 16px rgba(43,26,12,.08)',
        'card-hover':'0 14px 44px rgba(43,26,12,.16)',
        'inset-warm':'inset 0 2px 12px rgba(43,26,12,.08)',
      },
    },
  },
  plugins: [],
};
