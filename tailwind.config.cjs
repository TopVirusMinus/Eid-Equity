/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    plugins: [],
    colors: {
      secondary: "#0093FF",
      mask: "#062036",
      test: "lightgray",
      black: "black",
    },
  },
};
