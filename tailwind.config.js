/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto_black: "roboto-black",
        roboto_black_italic: "roboto-black-italic",
        roboto_bold: "roboto-bold",
        roboto_bold_italic: "roboto-bold-italic",
        roboto_italic: "roboto-italic",
        roboto_light: "roboto-light",
        roboto_light_italic: "roboto-light-italic",
        roboto_medium: "roboto-medium",
        roboto_medium_italic: "roboto-medium-italic",
        roboto: "roboto",
        roboto_thin: "roboto-thin",
        roboto_thin_italic: "roboto-thin-italic",
      },
    },
  },
  plugins: [],
};
