import { encryptValue } from "./crypto.js"

export const setColor = (color) => {
  const favoriteColor = {
    currentPrimary: color,
    currentSecondary: "#75e7fb",
    currentSecondaryDefault: "#535bf2",
  };
  if (color === favoriteColor.currentSecondaryDefault || color === "#7d2eaf") {
    document.documentElement.style.setProperty(
      "--current-secondary",
      favoriteColor.currentSecondary
    );
    document.documentElement.style.setProperty(
      "--current-primary",
      favoriteColor.currentPrimary
    );
    localStorage.setItem(
      "favoriteColor",
      encryptValue(JSON.stringify(favoriteColor))
    );
    return;
  }
  document.documentElement.style.setProperty("--current-secondary", "#535bf2");
  document.documentElement.style.setProperty(
    "--current-primary",
    favoriteColor.currentPrimary
  );
  localStorage.setItem(
    "favoriteColor",
    encryptValue(JSON.stringify(favoriteColor))
  );
};
