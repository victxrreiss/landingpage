import React from "react";

import Seo from "../components/utils/Seo"
import Hero from "../components/sections/Hero";
import FeaturesGrid from "../components/sections/FeaturesGrid";
import ServiceDetail from "../components/sections/ServiceDetail";
import Pricing from "../components/sections/Pricing";
import About from "../components/sections/About";

// Componente da página inicial que agrupa e organiza as seções
export default function Home() {
  return (
    // Fragmento React agrupando a renderização sequencial da Landing Page
    <>
      <Seo />
      <Hero />
      <FeaturesGrid />
      <ServiceDetail />
      <Pricing />
      <About />
    </>
  );
}
