import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Componente utilitário para gerenciamento de scroll na navegação
export default function ScrollToTop() {
  const { pathname } = useLocation();

  // Efeito que força o scroll para o topo (0,0) sempre que a rota muda
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Não renderiza nada visualmente, apenas executa lógica
  return null;
}
