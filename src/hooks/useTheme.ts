import { ThemeProviderContext } from "@/services/Context/ThemeProvider";
import { useContext } from "react";

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
