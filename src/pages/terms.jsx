import React from "react";
import content from "../config/content";

// Componente da página de Termos de Uso alimentado via config
export default function Terms() {
  const { terms } = content;

  return (
    // Estrutura de layout para leitura com tipografia otimizada e Dark Mode
    <section className="pt-32 pb-20 bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Cabeçalho dinâmico */}
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2 transition-colors">
          {terms.title}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-12 transition-colors">
          {terms.lastUpdate}
        </p>

        {/* Renderização dinâmica das seções de texto */}
        <div className="space-y-8 text-gray-600 dark:text-gray-400 leading-relaxed text-lg transition-colors">
          {terms.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">
                {section.title}
              </h2>
              {/* Suporte a múltiplos parágrafos por seção */}
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
