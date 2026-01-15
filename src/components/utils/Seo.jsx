import React from "react";
import { Helmet } from "react-helmet-async";
import content from "../../config/content";

// Componente utilitário para gerenciar meta tags e título da página dinamicamente
export default function Seo({ title, description }) {
  const { brand } = content;

  // Define o título: Se passar um título específico, usa "Título | Marca", senão usa só "Marca"
  const pageTitle = title ? `${title} | ${brand.name}` : brand.name;

  // Define a descrição: Se passar uma específica usa ela, senão usa a padrão da marca
  const pageDescription = description || brand.description;

  return (
    <Helmet>
      {/* Título da aba do navegador */}
      <title>{pageTitle}</title>

      {/* Descrição para mecanismos de busca (Google) */}
      <meta name="description" content={pageDescription} />

      {/* Meta tags básicas de Open Graph (para compartilhamento em redes sociais) */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
