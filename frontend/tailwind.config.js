// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         orange: "#FE5C3E",
//         black: "#040404",
//       },
//     },
//   },
//   plugins: [],
// };
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust paths as needed
  theme: {
    extend: {
      keyframes: {
        zoom: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" }, // Zoom in
          "100%": { transform: "scale(1)" }, // Zoom out
        },
      },
      animation: {
        zoom: "zoom 3s ease-in-out infinite", // Adjust timing as needed
      },
    },
  },
  plugins: [],
};

