import React from "react";
import { Mail } from "lucide-react";
import content from "../config/content";

export default function Contact() {
  // Extrai dados de contato e rodapé (onde estão as redes sociais)
  const { contact, brand, footer } = content;

  return (
    // Seção principal de contato centralizada verticalmente
    <section className="pt-32 pb-20 bg-white dark:bg-gray-950 min-h-screen flex items-center transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Cabeçalho dinâmico */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 transition-colors">
            {contact.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 transition-colors">
            {contact.subtitle}
          </p>
        </div>

        {/* Grid responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Card de contato via E-mail */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-10 text-center border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all group">
            <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-100 dark:border-gray-700 group-hover:scale-110 transition-all">
              <Mail className="w-10 h-10 text-gray-700 dark:text-gray-200" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 transition-colors">
              {contact.emailCard.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 transition-colors">
              {contact.emailCard.desc}
            </p>
            <a
              href={`mailto:${brand.contactEmail}`}
              className="text-xl font-semibold text-green-600 hover:text-green-700 hover:underline transition-colors"
            >
              {brand.contactEmail}
            </a>
          </div>

          {/* Card de Redes Sociais */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-10 text-center border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 transition-colors">
              {contact.socialCard.title}
            </h3>

            {/* Links externos mapeados do Footer da config */}
            <div className="grid grid-cols-2 gap-6 max-w-xs mx-auto">
              {footer.social.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 hover:shadow-sm transition-all group border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
                  >
                    <Icon className="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-white transition-colors" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
