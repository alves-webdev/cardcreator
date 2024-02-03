import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        point: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translate(1rem)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        point: 'point 1.5s ease-in-out infinite',
      },
      colors: {
        'background': '#6C5AE0',
        'headertext': '#212429',
        'btn': {
          'enabled': '#F2BF4E',
          'hover': '#F8DCA0',
          'disabled': '#E1E4E8',
        },
        'txt': {
          'disabled': '#97A1AC',
          'btn-text': '#100C27'
        },
        'txt-disabled': '#97A1AC',
        'footer-font': '#636E7C'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
