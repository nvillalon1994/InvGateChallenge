/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        '12': '3.5rem', // Puedes ajustar este valor según tus necesidades
      },
      keyframes: {
        "slide-up": {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "fade-down": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "fade-up": {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "fade": {
          "0%": {
            
            opacity: "0",
          },
          "100%": {
            
            opacity: "1",
          },
        },
      },
      animation: {
        "slide-up": "slide-up 1s ease-in-out ",
        "fade-down":"fade-down 1s ease-in-out ",
        "fade-up":"fade-up 1.5s ease-in-out ",
        "fade":"fade 1.5s ease-in-out "
      },
    },
  },
  plugins: [],
};
