import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import content from "../../config/content";
import ScrollAnimation from "../utils/ScrollAnimation"; // Importação da animação

export default function ServiceDetail() {
  // Extrai os dados do Service Detail da configuração
  const { serviceDetail } = content;

  // Estado que define qual aba está ativa no momento (padrão: primeira da lista)
  const [activeTab, setActiveTab] = useState(serviceDetail.items[0].id);
  const activeContent = serviceDetail.items.find(
    (item) => item.id === activeTab
  );

  return (
    // Seção principal com layout de duas colunas e fundo adaptável
    <section className="py-20 lg:py-28 bg-white dark:bg-gray-950 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Coluna da esquerda: Menu de seleção vertical animado vindo da esquerda */}
          <div className="w-full lg:w-1/3">
            {/* CORREÇÃO: Adicionado width="100%" para garantir que o menu ocupe toda a largura da coluna, restaurando o visual original */}
            <ScrollAnimation direction="right" width="100%">
              <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white transition-colors">
                {serviceDetail.title}
              </h3>
              <div className="flex flex-col gap-4">
                {serviceDetail.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`text-left px-6 py-5 rounded-xl transition-all duration-300 border-l-4 ${
                      activeTab === item.id
                        ? "bg-gray-100 dark:bg-gray-800 border-gray-400 dark:border-gray-500 shadow-sm"
                        : "bg-white dark:bg-transparent border-transparent hover:bg-gray-50 dark:hover:bg-gray-800/50 text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    <span
                      className={`block font-bold text-lg mb-1 transition-colors ${
                        activeTab === item.id
                          ? "text-gray-800 dark:text-white"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {item.label}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-500">
                      Clique para ver detalhes
                    </span>
                  </button>
                ))}
              </div>
            </ScrollAnimation>
          </div>

          {/* Coluna da direita: Conteúdo dinâmico animado vindo da direita */}
          <div className="w-full lg:w-2/3">
            <ScrollAnimation direction="left" delay={0.2} width="100%">
              <div className="bg-gray-50/50 dark:bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-800 transition-colors duration-300">
                {/* Placeholder de imagem com cor dinâmica vinda da config */}
                <div
                  className={`w-full aspect-video rounded-xl mb-8 ${activeContent.imageColor} flex items-center justify-center text-gray-400 dark:text-gray-300 font-medium transition-colors`}
                >
                  [Imagem Ilustrativa do {activeContent.label}]
                </div>

                {/* Títulos e descrições dinâmicas */}
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 transition-colors">
                  {activeContent.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed transition-colors">
                  {activeContent.desc}
                </p>

                {/* Lista de benefícios do serviço selecionado */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeContent.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-gray-700 dark:text-gray-300 transition-colors">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
