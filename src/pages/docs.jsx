import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import content from "../config/content";

export default function Docs() {
  const [expandedCards, setExpandedCards] = useState({});
  // Extrai dados de documentação
  const { docs } = content;

  const toggleCard = (cardId) => {
    setExpandedCards((prevState) => ({
      ...prevState,
      [cardId]: !prevState[cardId],
    }));
  };

  return (
    // Estrutura principal da página
    <section className="pt-32 pb-20 bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Cabeçalho centralizado */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">
            {docs.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors">
            {docs.subtitle}
          </p>
        </div>

        {/* Lista de cards gerada dinamicamente via config */}
        <div className="flex flex-col gap-6">
          {docs.items.map((doc) => {
            const isExpanded = expandedCards[doc.id];
            const Icon = doc.icon;

            return (
              <div
                key={doc.id}
                className={`border rounded-2xl p-6 md:p-8 transition-all duration-300 bg-white dark:bg-gray-900 ${
                  isExpanded
                    ? "border-green-200 dark:border-green-800 shadow-md"
                    : "border-gray-200 dark:border-gray-800 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700"
                }`}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`p-4 rounded-xl shrink-0 transition-colors duration-300 ${
                      isExpanded
                        ? "bg-green-50 dark:bg-green-900/30"
                        : "bg-gray-100 dark:bg-gray-800"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 transition-colors duration-300 ${
                        isExpanded
                          ? "text-green-600 dark:text-green-500"
                          : "text-gray-700 dark:text-gray-400"
                      }`}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                      {doc.summary}
                    </p>

                    {/* Accordion */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                        isExpanded
                          ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-gray-100 dark:border-gray-800"
                          : "grid-rows-[0fr] opacity-0 h-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2 transition-colors">
                          <span className="w-1.5 h-6 bg-green-500 rounded-full inline-block"></span>
                          Tópicos Cobertos:
                        </h4>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                          {doc.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 shrink-0"></span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleCard(doc.id)}
                      className={`mt-5 flex items-center gap-2 font-medium transition-colors focus:outline-none group ${
                        isExpanded
                          ? "text-green-700 dark:text-green-400"
                          : "text-green-600 dark:text-green-500 hover:text-green-700 dark:hover:text-green-400"
                      }`}
                    >
                      <span>{isExpanded ? "Mostrar menos" : "Saiba mais"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
