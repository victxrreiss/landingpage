import React from "react";
import content from "../config/content";

// Componente da página de Política de Privacidade alimentado via config
export default function Privacy() {
  const { privacy } = content;

  return (
    // Layout de documento textual com tipografia otimizada para leitura e Dark Mode
    <section className="pt-32 pb-20 bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Cabeçalho contendo título e data */}
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2 transition-colors">
          {privacy.title}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-12 transition-colors">
          {privacy.effectiveDate}
        </p>

        <div className="space-y-8 text-gray-600 dark:text-gray-400 leading-relaxed text-lg transition-colors">
          {/* Box de introdução em destaque */}
          <p className="font-medium bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 transition-colors">
            {privacy.intro}
          </p>

          {/* Seções numeradas detalhando as cláusulas */}
          {privacy.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">
                {section.title}
              </h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
