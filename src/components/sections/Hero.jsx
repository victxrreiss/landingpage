import React from "react";
import Button from "../ui/Button";
import content from "../../config/content";
import ScrollAnimation from "../utils/ScrollAnimation"; 

// Componente da seção principal (Hero) alimentado dinamicamente e com animações de entrada
export default function Hero() {
  // Extração dos dados da seção Hero do arquivo de configuração
  const { hero } = content;
  const PrimaryIcon = hero.ctaPrimary.icon; // Ícone do botão principal

  return (
    // Container principal com fundo e efeito de gradiente (oculto no dark mode)
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Elemento de fundo decorativo (Gradiente Radial) */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white -z-10 dark:opacity-0 transition-opacity duration-300"></div>

      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        {/* Animação do Badge (Pílula) no topo com delay curto */}
        <ScrollAnimation delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-sm font-semibold mb-8 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            {hero.badge}
          </div>
        </ScrollAnimation>

        {/* Animação do Título Principal (Vem de baixo) */}
        <ScrollAnimation width="100%">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 dark:text-white tracking-tight mb-8 leading-tight transition-colors">
            {hero.title.start} <br className="hidden md:block" />
            {/* Texto com efeito de gradiente (bg-clip-text) */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 dark:from-gray-200 dark:to-gray-400">
              {hero.title.highlight}
            </span>{" "}
            {hero.title.end}
          </h1>
        </ScrollAnimation>

        {/* Animação do Subtítulo descritivo com delay intermediário */}
        <ScrollAnimation delay={0.2}>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed transition-colors">
            {hero.subtitle}
          </p>
        </ScrollAnimation>

        {/* Animação do Grupo de Botões (CTAs) com delay maior */}
        <ScrollAnimation delay={0.4}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            {/* Botão Primário (Ação Principal) */}
            <a href={hero.ctaPrimary.href}>
              <Button variant="primary" className="text-lg px-8 py-4 gap-2">
                {hero.ctaPrimary.text} <PrimaryIcon className="w-5 h-5" />
              </Button>
            </a>

            {/* Botão Secundário (Outline) */}
            <a href={hero.ctaSecondary.href}>
              <Button variant="outline" className="text-lg px-8 py-4">
                {hero.ctaSecondary.text}
              </Button>
            </a>
          </div>
        </ScrollAnimation>

        {/* Animação da Lista de Benefícios (Trust Signals) com o maior delay */}
        <ScrollAnimation delay={0.6}>
          <div className="flex flex-col md:flex-row justify-center gap-6 text-green-700 dark:text-green-400 text-sm font-medium transition-colors">
            {/* Mapeamento dos benefícios vindos da config */}
            {hero.benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 justify-center"
                >
                  <Icon className="w-5 h-5 text-green-600 dark:text-green-500" />
                  {item.text}
                </div>
              );
            })}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
