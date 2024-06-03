/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            sup: {
              "vertical-align": "super",
              "font-size": "0.75em",
            },
          },
        },
      }),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, #ee5d37, #FFFFFF)',
      },
      borderRadius: {
        'full': '50%',
      },
      width: {
        '50': '50px',
      },
      height: {
        '50': '50px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
