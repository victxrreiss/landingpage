import React from "react";
import { motion } from "framer-motion";

// Componente utilitário responsável por animar elementos quando eles entram na tela (Scroll Reveal)
// Props:
// - direction: de onde o elemento vem ('up', 'down', 'left', 'right')
// - delay: atraso em segundos para criar efeito de cascata
// - width: largura do container da animação (padrão 'fit-content')
export default function ScrollAnimation({
  children,
  direction = "up",
  delay = 0,
  className = "",
  width = "fit-content",
}) {
  // Configuração das variações de estado da animação (Oculto -> Visível)
  const variants = {
    hidden: {
      opacity: 0,
      // Define a posição inicial baseada na direção escolhida
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      // Configuração da transição: duração suave e curva 'easeOut'
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      },
    },
  };

  return (
    // Componente 'motion.div' atua como uma div normal, mas com superpoderes de animação
    <motion.div
      variants={variants}
      initial="hidden" // Estado inicial
      whileInView="visible" // Estado quando entra na viewport
      viewport={{ once: true, margin: "-50px" }} // Dispara apenas uma vez, com margem de segurança
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}
