import React from "react";
import { CheckCircle2 } from "lucide-react";
import content from "../../config/content";
import ScrollAnimation from "../utils/ScrollAnimation"; // Importação da animação

export default function About() {
  // Extrai dados da seção Sobre
  const { about } = content;

  return (
    // Container principal com ID para navegação via scroll e fundo alternado
    <section
      id="about"
      className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        {/* Grid responsivo: coluna (mobile) vs linha (desktop) */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Coluna da esquerda: Conteúdo textual animado */}
          <div className="w-full lg:w-1/2">
            {/* Badge decorativa do topo */}
            <ScrollAnimation direction="right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-sm font-semibold mb-6 transition-colors">
                <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                {about.badge}
              </div>
            </ScrollAnimation>

            {/* CORREÇÃO PREVENTIVA: width="100%" */}
            <ScrollAnimation direction="right" delay={0.1} width="100%">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 leading-tight transition-colors">
                {about.title.main} <br />
                <span className="text-gray-500 dark:text-gray-400">
                  {about.title.highlight}
                </span>
              </h2>
            </ScrollAnimation>

            {/* CORREÇÃO PREVENTIVA: width="100%" */}
            <ScrollAnimation direction="right" delay={0.2} width="100%">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed transition-colors">
                {about.desc}
              </p>
            </ScrollAnimation>

            {/* Lista de pontos chave (Missão) */}
            {/* CORREÇÃO PREVENTIVA: width="100%" */}
            <ScrollAnimation direction="right" delay={0.3} width="100%">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white transition-colors">
                      {about.mission.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">
                      {about.mission.desc}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Coluna da direita: Elementos visuais animados (Vindo do lado oposto) */}
          <div className="w-full lg:w-1/2">
            {/* CORREÇÃO PREVENTIVA: width="100%" para garantir que o container da imagem ocupe a coluna toda */}
            <ScrollAnimation direction="left" delay={0.2} width="100%">
              <div className="relative">
                {/* Placeholder da imagem principal */}
                <div className="aspect-square md:aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-3xl flex items-center justify-center text-gray-400 dark:text-gray-300 font-medium text-lg transition-colors">
                  [Imagem da Equipe ou Escritório]
                </div>

                {/* Card flutuante de estatísticas (dados vindos da config) */}
                {/* Animamos o card flutuante separadamente para dar destaque */}
                {/* Aqui NÃO usamos width=100% porque queremos que esse card seja pequeno (max-w-xs) e flutuante */}
                <ScrollAnimation
                  direction="up"
                  delay={0.5}
                  className="absolute -bottom-8 -left-4 md:-left-8"
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-xs transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg transition-colors">
                        <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                          {about.stats.value}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-300 font-medium transition-colors">
                          {about.stats.label}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                          {about.stats.subLabel}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
