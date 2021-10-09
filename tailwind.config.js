module.exports = {
  purge: ["./pages/**/*.{jsx,tsx}", "./src/**/*.{jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        ourBlue: {
          DEFAULT: "#2C47D9",
          main_light: "#2C7BD9",
          secondary_light: "#2C71D9",
        },
        light: {
          DEFAULT: "#FFFFFF",
          darker: "#F7F7F7"
        }
      },
      fontSize: {
        heading: "24px",
        large: "20px",
        medium: "18px",
        average: "16px",
        small: "12px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}