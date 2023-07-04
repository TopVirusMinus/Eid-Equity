/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s ease-in",
      },
    },
    plugins: [],
    colors: {
      secondary: "rgba(100, 100, 100, 1)",
      secondaryLight: "rgba(100, 100, 100, 0.85)",
      mask: "rgba(6, 32, 54, 0.85)",
      white: "white",
      black: "black",
      blackish: "rgba(100, 100, 100, 0.85)",
      myGold: "#daa521",
    },
  },
};
