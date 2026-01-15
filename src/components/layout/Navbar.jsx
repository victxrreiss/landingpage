import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import content from "../../config/content";

export default function Navbar() {
  // Estado para controle do menu mobile e hook de localização
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Extraindo dados do arquivo de configuração para facilitar uso
  const { brand, navigation } = content;
  const LogoIcon = brand.logo; // Componente de ícone dinâmico

  // Lógica para scroll suave ao topo se já estiver na home
  const handleLogoClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    // Barra de navegação fixa com suporte a modo escuro e glassmorphism
    <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo da marca vinda da configuração */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="bg-gray-700 dark:bg-gray-600 p-2 rounded-lg transition-colors">
              <LogoIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-white tracking-tight transition-colors">
              {brand.name}
            </span>
          </Link>

          {/* Menu de navegação para Desktop gerado via Map */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.main.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white font-medium transition"
              >
                {item.name}
              </a>
            ))}

            {/* Botão de alternância de tema */}
            <ThemeToggle />

            {/* CTA Principal vindo da configuração */}
            <a href={navigation.cta.href}>
              <Button variant="primary" className="py-2 px-4 text-sm">
                {navigation.cta.text}
              </Button>
            </a>
          </div>

          {/* Botão de alternância do menu Mobile (Hambúrguer) e Toggle Mobile */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Dropdown renderizado apenas no Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 absolute w-full shadow-lg transition-colors duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {navigation.main.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <a href={navigation.cta.href} onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full justify-center">
                  {navigation.cta.text}
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
