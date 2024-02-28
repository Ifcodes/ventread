import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<string | null>(null);
  const defaultIsDark =
    window.matchMedia("(prefers-color-scheme: dark)").matches || false;
  const existingTheme = localStorage.getItem("theme");

  const handleChangeTheme = (outTheme: string, inTheme: string) => {
    document.documentElement.classList.remove(outTheme);
    document.documentElement.classList.add(inTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      handleChangeTheme("light", "dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      handleChangeTheme("dark", "light");
      localStorage.setItem("theme", "light");
    } else if (existingTheme && existingTheme === "dark") {
      console.log({ existingTheme });
      handleChangeTheme("light", "dark");
    } else if (existingTheme && existingTheme === "light") {
      console.log({ existingTheme });
      handleChangeTheme("dark", "light");
    } else if (defaultIsDark) {
      console.log({ defaultIsDark });
      handleChangeTheme("light", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      handleChangeTheme("dark", "light");
      localStorage.setItem("theme", "light");
    }
  }, [theme, existingTheme, defaultIsDark]);

  return { theme, setTheme };
};
