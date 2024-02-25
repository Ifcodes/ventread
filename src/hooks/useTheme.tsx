import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<string | null>();
  console.log({ theme });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  return { theme, setTheme };
};
