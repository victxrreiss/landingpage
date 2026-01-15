import React from "react";
import { Moon, Sun } from "lucide-react";
import useTheme from "../../hooks/useTheme";

// Botão de alternância de tema com ícones dinâmicos
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 
      focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
      aria-label="Alternar Tema"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-500" />
      )}
    </button>
  );
}
