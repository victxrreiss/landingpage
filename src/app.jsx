import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/home";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import Security from "./pages/security";
import Status from "./pages/status";
import Docs from "./pages/docs";
import Contact from "./pages/contact";

function App() {
  return (
    // Configuração do roteador e utilitário de reset de scroll
    <Router>
      <ScrollToTop />

      {/* Container flexível para garantir que o rodapé fique na base (Sticky Footer) */}
      <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
        <Navbar />

        {/* Área de conteúdo que expande para ocupar o espaço restante */}
        <main className="flex-grow">
          {/* Definição das rotas e mapeamento para os componentes das páginas */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/termos" element={<Terms />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="/seguranca" element={<Security />} />
            <Route path="/status" element={<Status />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
