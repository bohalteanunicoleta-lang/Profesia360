import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5B3FD4",
          50: "#F0ECFB",
          100: "#DDD5F7",
          200: "#BBABEF",
          300: "#9981E7",
          400: "#7757DF",
          500: "#5B3FD4",
          600: "#4A32AA",
          700: "#382580",
          800: "#261855",
          900: "#130C2B",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
