import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ThemeContextType } from "../types/Theme";

export const useTheme = (): ThemeContextType => {
  const value = useContext(ThemeContext);

  if (!value) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = value;

  return { theme, toggleTheme };
};
