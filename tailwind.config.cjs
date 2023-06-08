/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    plugins: [],
    colors: {
      secondary: "#0093FF",
      mask: "rgba(6, 32, 54, 0.85)",
      white: "white",
      black: "black",
    },
  },
};
