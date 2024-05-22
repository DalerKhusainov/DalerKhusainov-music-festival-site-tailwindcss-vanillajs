const plugin = require("tailwindcss/plugin");
const { default: lightOrDarkColor } = require("@check-light-or-dark/color");

const buttonPlugin = plugin(function ({
  addComponents,
  matchComponents,
  theme,
}) {
  console.log(theme("spacing")["0.5"]); // 0.125

  // Step 1: Define the base button styles
  // <div class="btn">Order now</div>  <== RESULT
  addComponents({
    ".btn": {
      display: "inline-block",
      cursor: "pointer",
      fontWeight: "bold",
      padding: `${theme("spacing.2")} ${theme("spacing.4")}`, // Using theme config directly
      borderRadius: theme("borderRadius").lg,
    },
  });

  // Step 2: Generate styles for different button colors using theme colors
  // <div class="btn btn-rose-500">Order now</div>  <== RESULT
  for (let key in theme("colors")) {
    if (typeof theme("colors")[key] !== "string") {
      for (let shade in theme("colors")[key]) {
        const colorType = lightOrDarkColor(theme("colors")[key][shade]);
        addComponents({
          [`.btn-${key}-${shade}`]: {
            backgroundColor: theme("colors")[key][shade],
            color: colorType === "dark" ? "white" : "black",
          },
        });
      }
    }
  }

  // Step 3: Match components based on their value
  // <div class="btn btn-[#000]">Order now</div>  <== RESULT
  matchComponents({
    btn: (value) => {
        return {
            backgroundColor: value,
            color: lightOrDarkColor(value) === "dark" ? "white" : "black",
        }
    }
  })
});

module.exports = buttonPlugin;




