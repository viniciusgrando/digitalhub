/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        default: 'rgba(22, 22, 22, 0.85)',
      },
      colors: {
        'dark-bg': '#161616',
        'dark-text': '#ffffff',
      },
    },
    darkMode: 'class',
  },
  plugins: [],
};
