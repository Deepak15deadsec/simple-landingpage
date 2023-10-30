/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(50% 50% at 50% 50%, #508CA0 0%, #15506B 100%)',
      }
    }
  },
  plugins: [],

  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1601px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1701px',
      // => @media (min-width: 1536px) { ... }
    }
  }
}
