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
}
