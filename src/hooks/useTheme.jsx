import { useState, useEffect } from "react";

// Hook personalizado para gerenciar o tema (Dark/Light) e persistência
export default function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = window.document.documentElement;
    // Remove a classe antiga e adiciona a nova na tag <html>
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    
    // Salva a preferência no LocalStorage do navegador
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Função para alternar entre os estados
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}