import React from "react";
import content from "../config/content";

export default function Security() {
  const { security } = content;

  return (
    // Seção principal
    <section className="pt-32 pb-20 bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 transition-colors">
          {security.title}
        </h1>

        {/* Grid de destaques mapeado da config */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {security.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 transition-colors"
              >
                <Icon className="w-8 h-8 text-green-600 dark:text-green-500 mb-4" />
                <h3 className="font-bold text-gray-800 dark:text-white mb-2 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Texto estático mantido por ser conteúdo longo/legal */}
        <div className="space-y-8 text-gray-600 dark:text-gray-400 leading-relaxed text-lg transition-colors">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">
            Padrões de Indústria
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </section>
  );
}
