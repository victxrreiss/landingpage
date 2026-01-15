import React from "react";
import Button from "../ui/Button";
import { Check } from "lucide-react";
import content from "../../config/content";
import ScrollAnimation from "../utils/ScrollAnimation"; // Importação da animação

export default function Pricing() {
  // Extrai os dados de Preços da configuração
  const { pricing } = content;

  return (
    // Seção principal de preços com fundo adaptável
    <section
      id="pricing"
      className="py-20 lg:py-28 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção com título e descrição dinâmicos e animados */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* CORREÇÃO PREVENTIVA: width="100%" para manter centralização */}
          <ScrollAnimation width="100%">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 transition-colors">
              {pricing.title}
            </h2>
          </ScrollAnimation>

          {/* CORREÇÃO PREVENTIVA: width="100%" para manter centralização */}
          <ScrollAnimation delay={0.2} width="100%">
            <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors">
              {pricing.subtitle}
            </p>
          </ScrollAnimation>
        </div>

        {/* Container em grid responsivo para os cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricing.plans.map((plan, index) => (
            // Animação com delay progressivo para cada plano (Cascata)
            // CORREÇÃO PREVENTIVA: width="100%" para encher a célula do grid
            // CORREÇÃO PREVENTIVA: className="h-full" para garantir que o card estique verticalmente
            <ScrollAnimation
              key={index}
              delay={index * 0.15}
              width="100%"
              className="h-full"
            >
              {/* Renderização do card com estilos condicionais para destaque (isPopular) */}
              <div
                className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 h-full ${
                  plan.isPopular
                    ? "border-green-500 shadow-xl z-10 bg-white dark:bg-gray-800 dark:border-green-500"
                    : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md bg-gray-50/50 dark:bg-transparent"
                }`}
              >
                {/* Badge de "Recomendado" posicionada apenas no plano popular */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-gray-900 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                    Recomendado
                  </div>
                )}

                {/* Informações básicas do plano */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transition-colors">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors">
                    {plan.desc}
                  </p>
                </div>

                {/* Exibição do preço e periodicidade */}
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-gray-800 dark:text-white transition-colors">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 transition-colors">
                    {plan.period}
                  </span>
                </div>

                {/* Lista de funcionalidades vindas da config */}
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm transition-colors"
                    >
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Botão de ação com texto dinâmico (cta) */}
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block" // Garante que o link ocupe a largura
                >
                  <Button
                    variant={plan.isPopular ? "primary" : "outline"}
                    className="w-full justify-center"
                  >
                    {plan.cta}
                  </Button>
                </a>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
