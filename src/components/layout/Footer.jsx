import React from "react";
import { Link, useLocation } from "react-router-dom";
import content from "../../config/content";

// Componente de rodapé com navegação secundária e links sociais dinâmicos
export default function Footer() {
  const { pathname } = useLocation();
  const { brand, footer } = content;
  const LogoIcon = brand.logo;

  const handleLogoClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    // Rodapé com fundo claro/escuro e borda superior
    <footer className="bg-[rgb(248,250,250)] dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-12 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          {/* Logo e Copyright dinâmicos */}
          <div className="flex items-center gap-2">
            <Link
              to="/"
              onClick={handleLogoClick}
              className="hover:opacity-80 transition-opacity"
            >
              <div className="bg-gray-700 dark:bg-gray-600 p-2 rounded-lg transition-colors">
                <LogoIcon className="h-6 w-6 text-white" />
              </div>
            </Link>

            <span className="text-sm text-gray-500 dark:text-gray-500">
              {footer.copyright}
            </span>
          </div>

          {/* Links de navegação interna mapeados da config */}
          <div className="flex flex-wrap justify-center gap-6 text-xs md:text-sm font-medium">
            {footer.links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-gray-900 dark:hover:text-white hover:underline transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Ícones de redes sociais mapeados da config */}
          <div className="flex items-center gap-5">
            {footer.social.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                  title={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
