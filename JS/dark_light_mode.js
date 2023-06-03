const runColorMode = (cb) => {
  if (!window.matchMedia) {
    return;
  }
  const query = window.matchMedia("(prefers-color-scheme: dark)");
  cb(query.matches);
  query.addEventListener("change", (e) => cb(e.matches));
};

const checkLocalStorge = () => {
  if (localStorage.getItem("dark-mode") !== null) {
    const isDarkMode = localStorage.getItem("dark-mode");
    setInitialTheme(isDarkMode);
  }
};

const setInitialTheme = (isDarkMode) => {
  if (isDarkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};

const activateButton = () => {
  let darkModeButton = document.getElementsByClassName("icon-button")[0];
  darkModeButton.addEventListener("click", () => {
    const isDarkMode = document.querySelector("body").classList.toggle("dark");
    try {
      if (isDarkMode) localStorage.setItem("dark-mode", "enabled");
      else localStorage.setItem("dark-mode", "");
    } catch {
      //showError("sorry we can't save your dark mode state as your local storge is full");
      console.log(
        "sorry We can't save your dark mode state as your local storge is full"
      );
    }
  });
};

runColorMode(setInitialTheme);
checkLocalStorge();
activateButton();
