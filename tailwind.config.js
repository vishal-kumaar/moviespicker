/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(-font-cutive-mono)"],
        signika: ["var(--font-signika)"],
        roboto: ["var(--font-roboto)"],
        poppins: ["var(--font-poppins)"],
        firasans: ["var(--font-fira-sans)"],
        cherrybomb: ["var(--font-chela-one)"],
      },
    },
  },
  plugins: [],
};
