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
      secondary: "#005694",
      secondaryLight:   "#0093FF",
      mask: "rgba(6, 32, 54, 0.85)",
      white: "white",
      black: "black",
      blackish: "#081c1f",
      myGold: "#daa521",
    },
  },
};
