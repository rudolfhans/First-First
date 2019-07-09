import Typography from "typography"

const typography = new Typography({
  baseFontSize: "25px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],

  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      margin: 0,
      fontSize: "2em",
    },

    a: {
      color: "white",
      textDecoration: "none",
    },
  }),
})

export default typography
