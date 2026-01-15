import {
  Package,
  CheckCircle2,
  ArrowRight,
  Layers,
  Users,
  Zap,
  MessageCircle,
  Instagram,
  Github,
  Linkedin,
  Mail,
  Shield,
  Lock,
  Server,
  BookOpen,
  FileText,
  Code,
  Check,
  Moon,
  Sun,
} from "lucide-react";

// Arquivo central de configuração de conteúdo
// Altere os dados aqui para que eles reflitam em todo o site automaticamente
export default {
  // --- IDENTIDADE GLOBAL ---
  brand: {
    name: "Titulo do Site",
    logo: Package,
    description: "Uma breve descrição da sua empresa para meta tags e rodapé.",
    contactEmail: "contato@email.com",
  },

  // --- NAVEGAÇÃO (Navbar) ---
  navigation: {
    main: [
      { name: "Recursos", href: "/#features" },
      { name: "Preços", href: "/#pricing" },
      { name: "Sobre", href: "/#about" },
    ],
    cta: {
      text: "Começar Agora",
      href: "/#pricing",
    },
  },

  // --- SEÇÃO HERO (Home) ---
  hero: {
    badge: "Novidade: Versão 2.0 Disponível",
    title: {
      start: "A Solução Ideal para",
      highlight: "O Seu Negócio",
      end: "Crescer",
    },
    subtitle:
      "Uma descrição de alto impacto que explica o valor do seu produto em poucas palavras. Focada em conversão e clareza.",
    ctaPrimary: {
      text: "Ver Planos e Preços",
      href: "#pricing",
      icon: ArrowRight,
    },
    ctaSecondary: {
      text: "Conhecer Recursos",
      href: "#features",
    },
    benefits: [
      { text: "Setup Rápido", icon: CheckCircle2 },
      { text: "Suporte 24/7", icon: CheckCircle2 },
      { text: "Cancelamento Grátis", icon: CheckCircle2 },
    ],
  },

  // --- SEÇÃO FEATURES GRID (Home) ---
  features: {
    title: "Nossos Principais Serviços",
    subtitle:
      "Subtítulo explicativo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Abaixo, os pilares da nossa solução.",
    items: [
      {
        icon: Layers,
        title: "Serviço 01",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      },
      {
        icon: Users,
        title: "Serviço 02",
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      },
      {
        icon: Zap,
        title: "Serviço 03",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
  },

  // --- SEÇÃO SERVICE DETAIL (Home) ---
  serviceDetail: {
    title: "Explore os Recursos",
    items: [
      {
        id: "service-1",
        label: "Funcionalidade A",
        title: "Detalhes do Serviço A",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        points: ["Integração total", "API robusta", "Suporte dedicado"],
        imageColor: "bg-gray-50 dark:bg-gray-700",
      },
      {
        id: "service-2",
        label: "Funcionalidade B",
        title: "Como funciona o Serviço B",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        points: [
          "Analytics em tempo real",
          "Dashboards customizáveis",
          "Exportação de dados",
        ],
        imageColor: "bg-gray-100 dark:bg-gray-600",
      },
      {
        id: "service-3",
        label: "Funcionalidade C",
        title: "Vantagens do Serviço C",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
        points: [
          "Segurança avançada",
          "Criptografia ponta a ponta",
          "Backups automáticos",
        ],
        imageColor: "bg-gray-200 dark:bg-gray-500",
      },
    ],
  },

  // --- SEÇÃO PRICING (Home) ---
  pricing: {
    title: "Nossos Planos",
    subtitle:
      "Escolha a opção ideal para o seu momento. Sem taxas escondidas, cancele quando quiser.",
    plans: [
      {
        name: "Plano Inicial",
        price: "R$ 99",
        period: "/mês",
        desc: "Para quem está começando.",
        features: ["1 Usuário", "5 Projetos", "Suporte por Email"],
        isPopular: false,
        cta: "Escolher este Plano",
        href: "https://wa.me/5511999999999?text=Tenho%20interesse%20no%20Plano%20Inicial",
      },
      {
        name: "Plano Intermediário",
        price: "R$ 199",
        period: "/mês",
        desc: "A melhor escolha para crescer.",
        features: ["5 Usuários", "20 Projetos", "Suporte Prioritário"],
        isPopular: true,
        cta: "Escolher este Plano",
        href: "https://wa.me/5511999999999?text=Tenho%20interesse%20no%20Plano%20Intermediário",
      },
      {
        name: "Plano Avançado",
        price: "R$ 299",
        period: "/mês",
        desc: "Para grandes operações.",
        features: ["Ilimitado", "Projetos Ilimitados", "Gerente de Conta"],
        isPopular: false,
        cta: "Escolher este Plano",
        href: "https://wa.me/5511999999999?text=Tenho%20interesse%20no%20Plano%20Avançado",
      },
    ],
  },

  // --- SEÇÃO ABOUT (Home) ---
  about: {
    badge: "Sobre Nós",
    title: {
      main: "Construindo soluções que",
      highlight: "impulsionam o futuro.",
    },
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    mission: {
      title: "Missão Focada",
      desc: "Entregar valor real através de tecnologia.",
    },
    stats: {
      value: "+5k",
      label: "Clientes Satisfeitos",
      subLabel: "Em todo o mundo",
    },
  },

  // --- PÁGINA CONTATO ---
  contact: {
    title: "Fale Conosco",
    subtitle: "Estamos aqui para ajudar o seu negócio a crescer.",
    emailCard: {
      title: "E-mail",
      desc: "Resposta em até 24 horas",
    },
    socialCard: {
      title: "Nossas Redes",
    },
  },

  // --- PÁGINA DOCS ---
  docs: {
    title: "Documentação",
    subtitle: "Tudo o que você precisa para configurar, usar e escalar.",
    items: [
      {
        id: "quick-start",
        icon: BookOpen,
        title: "Guia de Início Rápido",
        summary: "Aprenda a configurar sua conta...",
        details: ["Instalação", "Configuração Inicial"],
      },
      {
        id: "manuals",
        icon: FileText,
        title: "Manuais de Uso",
        summary: "Documentação detalhada...",
        details: ["Dashboard", "Relatórios"],
      },
      {
        id: "api-ref",
        icon: Code,
        title: "Referência da API",
        summary: "Documentação técnica completa...",
        details: ["Autenticação", "Endpoints"],
      },
    ],
  },

  // --- PÁGINA STATUS ---
  status: {
    title: "Todos os sistemas operacionais",
    lastCheck: "Última verificação: Agora mesmo",
    systems: [
      { name: "API Principal", status: "Operacional", uptime: "99.99%" },
      { name: "Dashboard do Cliente", status: "Operacional", uptime: "100%" },
      {
        name: "Processamento de Pagamentos",
        status: "Operacional",
        uptime: "99.95%",
      },
      { name: "Servidor de E-mails", status: "Operacional", uptime: "99.98%" },
      { name: "Banco de Dados", status: "Operacional", uptime: "100%" },
    ],
  },

  // --- PÁGINA SEGURANÇA ---
  security: {
    title: "Segurança e Conformidade",
    items: [
      {
        icon: Shield,
        title: "Criptografia Ponta a Ponta",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: Lock,
        title: "Autenticação Segura",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: Server,
        title: "Backups",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },

  // --- PÁGINA TERMOS DE USO ---
  terms: {
    title: "Termos de Uso",
    lastUpdate: "Última atualização: 04 de Dezembro de 2025",
    sections: [
      {
        title: "1. Aceitação dos Termos",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
      },
      {
        title: "2. Licença de Uso",
        content: [
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        ],
      },
      {
        title: "3. Limitações de Responsabilidade",
        content: [
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
        ],
      },
    ],
  },

  // --- PÁGINA POLÍTICA DE PRIVACIDADE ---
  privacy: {
    title: "Política de Privacidade",
    effectiveDate: "Vigência a partir de: 01 de Janeiro de 2025",
    intro:
      "Sua privacidade é nossa prioridade. Este documento explica como coletamos, usamos e protegemos seus dados pessoais ao utilizar a plataforma.",
    sections: [
      {
        title: "1. Coleta de Dados",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "2. Uso das Informações",
        content:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      },
      {
        title: "3. Compartilhamento com Terceiros",
        content:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      },
    ],
  },

  // --- RODAPÉ GLOBAL ---
  footer: {
    copyright: "© 2026 Titulo do Site. Todos os direitos reservados.",
    links: [
      { name: "Termos", href: "/termos" },
      { name: "Privacidade", href: "/privacidade" },
      { name: "Segurança", href: "/seguranca" },
      { name: "Status", href: "/status" },
      { name: "Docs", href: "/docs" },
      { name: "Contato", href: "/contato" },
    ],
    social: [
      { name: "WhatsApp", href: "https://whatsapp.com", icon: MessageCircle },
      { name: "Instagram", href: "https://instagram.com", icon: Instagram },
      { name: "GitHub", href: "https://github.com", icon: Github },
      { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    ],
  },
};
