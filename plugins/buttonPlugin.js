const plugin = require("tailwindcss/plugin");
const { default: lightOrDarkColor } = require("@check-light-or-dark/color");

const buttonPlugin = plugin(function ({
  addComponents,
  matchComponents,
  theme,
}) {
  console.log(theme("spacing")["0.5"]); // 0.125

  addComponents({
    ".btn": {
      display: "inline-block",
      cursor: "pointer",
      fontWeight: "bold",
      // padding: `${theme("spacing")["0.5"]} ${theme("spacing")["4"]}`, // Method 1
      padding: `${theme("spacing.2")} ${theme("spacing.4")}`, // Method 2
      borderRadius: theme("borderRadius").lg,
    },
  });

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
