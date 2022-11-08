/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        Contain: "url('/src/Assets/Image/bg1.jpg')",
        bg2: "url('/src/Assets/Image/bg2.jpg')",
      }),
      backgroundSize: (theme) => ({
        cover: "cover",
      }),
    },
  },
  plugins: [],
};
