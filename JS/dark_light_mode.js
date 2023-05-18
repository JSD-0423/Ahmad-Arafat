let isDark = false;
let isFav = false;
let root = document.querySelector(":root");

const lightModeColors = {
  "brand-primary": "#0768ac",
  "brand-secondary": "#03c180",
  "bg-default": "#ffffff",
  "bg-body": "#f0f9ff",
  "lines-color": "#dddddd",
  "body-text": "#333333",
  "heart-color": "#dc143c",
  shadow: "#dddddd",
  "details-dark-section": "#282828",
};

const darkModeColors = {
  "brand-primary": "#0768AC",
  "brand-secondary": "#03C180",
  "bg-default": "#1A1A1A",
  "bg-body": "#282828",
  "lines-color": "#000000",
  "body-text": "#EDEDED",
  "heart-color": "#DC143C",
  shadow: "#1A1A1A",
  "details-dark-section": "#333333",
};

let darkModeButton = document.getElementsByClassName("icon-button")[0];

//dark mode
darkModeButton.addEventListener("click", () => {
  isDark = !isDark;

  if (isDark) {
    for (prop in darkModeColors) {
      root.style.setProperty(`--${prop}`, darkModeColors[prop]);
    }
  } else {
    for (prop in lightModeColors) {
      root.style.setProperty(`--${prop}`, lightModeColors[prop]);
    }
  }
});
