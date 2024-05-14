const plugin = require("tailwindcss/plugin");

// Step 1: Define a Tailwind plugin for custom utilities
const animationDelay = plugin(
  function ({ matchUtilities, theme }) {
    // Step 2: Match utilities to generate custom CSS properties
    matchUtilities(
      {
        "animation-delay": (value) => {
          return {
            animationDelay: value, // Set the animation delay property based on the utility value
          };
        },
      },
      {
        values: theme("animationDelay"), // Use values from the theme configuration for animation delay
      }
    );
  },
  {
    // Step 3: Define the theme configuration for animation delays
    theme: {
      animationDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1000: "1000ms",
      },
    },
  }
);

// Step 4: Export the custom animationDelay plugin
module.exports = animationDelay;
