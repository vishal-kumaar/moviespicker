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
        cherrybomb: ['Cherry Bomb One', 'cursive'],
      },
      backgroundImage: {
        'coverImage': "url('/public/coverImages/cover_image.jpg')",
        'tvCover': "url('/public/coverImages/tv_shows_cover_image.jpg')",
        'actionImage': "url('/public/coverImages/action_cover_image.jpg')",
        'actionSeriesImage': "url('/public/coverImages/action_series_cover_image.jpg')",
        'pattern': "url('/public/coverImages/pattern.svg')",
        'romantic': "url('/public/coverImages/romantic_cover_image.jpg')",
        'romanticSeries': "url('/public/coverImages/romantic_series_cover_image.jpg')",
      }
    },
  },
  plugins: [],
}