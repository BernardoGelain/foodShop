import { ReactNode, createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../styles/themes/light";
import { darkTheme } from "../../styles/themes/dark";
import { GlobalStyle } from "../../styles/global";

type ThemeProps = {
  children: ReactNode;
};
type ThemeContextType = {
  theme?: string;
  toggleTheme: () => void;
};
type Themes = "light" | "dark" | undefined;

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeProps) {
  const [theme, setTheme] = useState<Themes>(() => {
    const storageValue = localStorage.getItem("GELAIN-THEME:theme-1.0.0");

    if (storageValue == "light" || !storageValue) {
      return "light";
    } else if (storageValue == "dark") {
      return "dark";
    }
  });

  function toggleTheme() {
    const themeNow = theme === "light" ? "dark" : "light";

    setTheme(themeNow);

    localStorage.setItem("GELAIN-THEME:theme-1.0.0", JSON.stringify(themeNow));
  }

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <GlobalStyle />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
