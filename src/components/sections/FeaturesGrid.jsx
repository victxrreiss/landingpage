import React from "react";
import content from "../../config/content";
import ScrollAnimation from "../utils/ScrollAnimation"; // Importação da animação

export default function FeaturesGrid() {
  // Extrai os dados da seção Features do arquivo de configuração
  const { features } = content;

  return (
    // Seção principal com fundo alternado e espaçamento vertical
    <section
      id="features"
      className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        {/* Cabeçalho centralizado com animação de entrada */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* CORREÇÃO: Adicionado width="100%" para garantir que o bloco ocupe a largura toda e o texto fique centralizado */}
          <ScrollAnimation width="100%">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 transition-colors">
              {features.title}
            </h2>
          </ScrollAnimation>

          {/* CORREÇÃO: Adicionado width="100%" aqui também */}
          <ScrollAnimation delay={0.2} width="100%">
            <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors">
              {features.subtitle}
            </p>
          </ScrollAnimation>
        </div>

        {/* Grid responsivo iterando sobre o array de itens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.items.map((item, index) => {
            const Icon = item.icon;
            return (
              // Envolvemos cada card na animação
              // delay={index * 0.1} cria o efeito de "escadinha" (um aparece depois do outro)
              <ScrollAnimation key={index} delay={index * 0.1} width="100%">
                {/* Card individual com efeitos de hover e cores adaptáveis */}
                <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-700 dark:group-hover:bg-gray-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed transition-colors">
                    {item.desc}
                  </p>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
