import { ReactNode, createContext, useEffect, useState } from "react";

interface IThemeContext {
  theme: string | null;
  setTheme: (theme: string | null) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: null,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("theme")
  );
  const defaultIsDark =
    window.matchMedia("(prefers-color-scheme: dark)").matches || false;
  const existingTheme = localStorage.getItem("theme");

  const handleChangeTheme = (outTheme: string, inTheme: string) => {
    document.documentElement.classList.remove(outTheme);
    document.documentElement.classList.add(inTheme);
  };

  console.log({ theme });
  useEffect(() => {
    if (theme === "dark") {
      handleChangeTheme("light", "dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      handleChangeTheme("dark", "light");
      localStorage.setItem("theme", "light");
    } else if (existingTheme && existingTheme === "dark") {
      handleChangeTheme("light", "dark");
    } else if (existingTheme && existingTheme === "light") {
      handleChangeTheme("dark", "light");
    } else if (defaultIsDark) {
      handleChangeTheme("light", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      handleChangeTheme("dark", "light");
      localStorage.setItem("theme", "light");
    }
  }, [theme, existingTheme, defaultIsDark]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
