import { useEffect } from "react";

const colorSchemeQueryList = window.matchMedia("(prefers-color-scheme: dark)");

const setColorScheme = (e: MediaQueryListEvent | MediaQueryList) => {
  if (e.matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};

// TODO: Save prefered color scheme in localStorage.
setColorScheme(colorSchemeQueryList);
export default function () {
  useEffect(() => {
    colorSchemeQueryList.addEventListener("change", setColorScheme);
  }, []);
}
