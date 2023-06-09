/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Cutive Mono", "monospace"],
        signika: ["Signika", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        firasans: ["Fira Sans", "sans-serif"],
        cursive: ["Cedarville Cursive", "cursive"],
        cherrybomb: ['Cherry Bomb One', 'cursive'],
      },
      backgroundImage: {
        'coverImage': "url('/public/images/cover_image.jpg')",
        'actionImage': "url('/public/images/action_cover_image.jpg')",
      }
    },
  },
  plugins: [],
}