/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#111115",
        "pitchdeck-slide-background": "#fff",
        whitesmoke: "#f8f8f8",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0.2)",
        },
        deepskyblue: "#16b9ff",
        turquoise: "#25f2da",
      },
      spacing: {},
      fontFamily: {
        "bruno-ace-sc": "'Bruno Ace SC'",
        goldman: "Goldman",
        "libre-barcode-39": "'Libre Barcode 39'",
        ligconsolata: "Ligconsolata",
        audiowide: "Audiowide",
        michroma: "Michroma",
      },
    },
    fontSize: {
      mini: "15px",
      "45xl": "64px",
      "77xl": "96px",
      xl: "20px",
      "17xl": "36px",
      "3xl-7": "22.7px",
      "5xl": "24px",
      base: "16px",
      "13xl": "32px",
      "2xl": "21px",
      "14xl": "33px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
