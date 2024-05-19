/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // Step 1: Define custom keyframes animation
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(0.5)", // Scale element along Y-axis to 0.5 at 0% and 100%
          },
          "50%": {
            transform: "scaleY(1.5)", // Scale element along Y-axis to 1.5 at 50%
          },
        },
      },
      // Step 2: Create Tailwind utility class for the animation
      animation: {
        wavey: "wavey 1000ms linear infinite", // Apply wavey animation with specific settings
      },
    },
  },
  plugins: [
    require("./plugins/openVariant"),
    require("./plugins/animationDelay"),
    require("./plugins/tableCaption"),
  ],
};
