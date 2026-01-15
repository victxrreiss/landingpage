import React from "react";

// Componente de botão flexível com propriedades padrão e repasse de atributos
export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  // Estilos base comuns (alinhamento, transições e estados de foco/disabled)
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  // Definição das variações visuais (Primary, Outline, Text) com suporte a Dark Mode
  const variants = {
    primary:
      "bg-gray-700 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500 focus:ring-gray-500 shadow-sm hover:shadow-md",

    outline:
      "border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-gray-700 dark:hover:border-gray-400 hover:text-gray-800 dark:hover:text-white bg-transparent",

    text: "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white px-4 hover:bg-gray-50 dark:hover:bg-gray-800",
  };

  return (
    // Combinação de classes CSS e renderização do elemento nativo
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
