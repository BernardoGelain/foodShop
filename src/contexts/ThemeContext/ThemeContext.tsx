import { ReactNode, createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../styles/themes/light";
import { darkTheme } from "../../styles/themes/dark";
import { GlobalStyle } from "../../styles/global";
import { ThemeType } from "../../@types/styles";

type ThemeProps = {
  children: ReactNode;
};
type ThemeContextType = {
  theme?: string;
  toggleTheme: () => void;
  updateThemeColors: (newColors: Partial<typeof lightTheme.colors>) => void; // Atualizado para aceitar as novas cores
};
type Themes = "light" | "dark" | undefined;

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeProps) {
  const [theme, setTheme] = useState<Themes>(() => {
    const storageValue = localStorage.getItem("GELAIN-THEME:theme-1.0.0");

    if (storageValue === "light" || !storageValue) {
      return "light";
    } else if (storageValue === "dark") {
      return "dark";
    }
  });

  const [customTheme, setCustomTheme] = useState(() => {
    const storedCustomTheme = localStorage.getItem("GELAIN-THEME:custom-theme-1.0.0");
    return storedCustomTheme ? JSON.parse(storedCustomTheme) : null;
  });

  useEffect(() => {
    if (customTheme) {
      localStorage.setItem("GELAIN-THEME:custom-theme-1.0.0", JSON.stringify(customTheme));
    }
  }, [customTheme]);

  function toggleTheme() {
    const themeNow = theme === "light" ? "dark" : "light";

    setTheme(themeNow);
    localStorage.setItem("GELAIN-THEME:theme-1.0.0", themeNow);
  }

  function updateThemeColors(newColors: Partial<typeof lightTheme.colors>) {
    const baseTheme = theme === "light" ? lightTheme : darkTheme;
    setCustomTheme((prevTheme: ThemeType) => ({
      ...baseTheme,
      colors: {
        ...baseTheme.colors,
        ...prevTheme?.colors,
        ...newColors,
      },
    }));
  }

  const appliedTheme = customTheme ? customTheme : theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={appliedTheme}>
      <ThemeContext.Provider value={{ theme, toggleTheme, updateThemeColors }}>
        <GlobalStyle />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
