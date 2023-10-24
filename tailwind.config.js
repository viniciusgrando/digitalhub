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
        default: 'rgba(16, 16, 16, 0.85)',
      },
      colors: {
        'dark-bg': 'rgba(16, 16, 16, 1)',
        'dark-text': 'rgba(255, 255, 255, 1)',
      },
    },
    darkMode: 'class',
  },
  plugins: [],
};
