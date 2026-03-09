/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        soil:    { DEFAULT: '#2C1A0E', light: '#3D2514' },
        bark:    { DEFAULT: '#5C3A1E', light: '#7A4F2B' },
        almond:  { DEFAULT: '#C8965A', light: '#DDB07A', pale: '#F0DEC0' },
        walnut:  { DEFAULT: '#8B6340', light: '#A67C52' },
        leaf:    { DEFAULT: '#4A6741', light: '#6B8F62' },
        cream:   { DEFAULT: '#FBF6EE', dark: '#F0E8D8' },
        sand:    { DEFAULT: '#EAE0CE' },
        stone:   { DEFAULT: '#B8A898' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem',    { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.05' }],
        '7xl': ['4.5rem',  { lineHeight: '1' }],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up':   'fadeUp .75s cubic-bezier(.22,1,.36,1) both',
        'fade-in':   'fadeIn .5s ease both',
        'marquee':   'marquee 32s linear infinite',
        'float':     'float 5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:  { from:{ opacity:'0', transform:'translateY(22px)' }, to:{ opacity:'1', transform:'translateY(0)' } },
        fadeIn:  { from:{ opacity:'0' }, to:{ opacity:'1' } },
        marquee: { from:{ transform:'translateX(0)' }, to:{ transform:'translateX(-50%)' } },
        float:   { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-12px)' } },
      },
      boxShadow: {
        'warm':    '0 8px 32px rgba(44,26,14,.12)',
        'warm-lg': '0 20px 60px rgba(44,26,14,.16)',
        'card':    '0 2px 16px rgba(44,26,14,.08)',
        'card-hover': '0 12px 40px rgba(44,26,14,.14)',
      },
    },
  },
  plugins: [],
};
