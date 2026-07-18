import { Establishment, Catalog, Order, DeliveryPerson } from "./types";

/**
 * Dados 100% estáticos (mock). Nenhuma chamada de rede ou banco de dados.
 * Substitua este arquivo por uma chamada de API/DB quando evoluir o projeto.
 */

export const ESTABLISHMENTS: Establishment[] = [
  {
    id: "e1",
    name: "Fogo & Farofa",
    segment: "Restaurante",
    category: "Brasileira · Lanches",
    logo: "🔥",
    banner: "linear-gradient(135deg,#0E5AA7,#2D2D2D)",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: 6.99,
    hours: "Seg a Dom · 11h às 23h",
    open: true,
  },
  {
    id: "e2",
    name: "Pizzaria Bella Nonna",
    segment: "Restaurante",
    category: "Pizzas · Italiana",
    logo: "🍕",
    banner: "linear-gradient(135deg,#C66A3D,#2D2D2D)",
    rating: 4.6,
    deliveryTime: "35-50 min",
    deliveryFee: 8.5,
    hours: "Ter a Dom · 18h às 00h",
    open: true,
  },
  {
    id: "e3",
    name: "Doce Ponto",
    segment: "Restaurante",
    category: "Sobremesas · Açaí",
    logo: "🍨",
    banner: "linear-gradient(135deg,#3FA34D,#2D2D2D)",
    rating: 4.9,
    deliveryTime: "20-30 min",
    deliveryFee: 4.99,
    hours: "Todos os dias · 10h às 22h",
    open: false,
  },
  {
    id: "e4",
    name: "Sumo Bar",
    segment: "Restaurante",
    category: "Sucos · Bebidas",
    logo: "🥤",
    banner: "linear-gradient(135deg,#0E5AA7,#3FA34D)",
    rating: 4.7,
    deliveryTime: "15-25 min",
    deliveryFee: 3.99,
    hours: "Seg a Sáb · 8h às 20h",
    open: true,
  },
  {
    id: "e5",
    name: "Farmácia Vida",
    segment: "Farmácia",
    category: "Medicamentos · Higiene",
    logo: "💊",
    banner: "linear-gradient(135deg,#3FA34D,#0E5AA7)",
    rating: 4.7,
    deliveryTime: "20-30 min",
    deliveryFee: 5.99,
    hours: "Todos os dias · 7h às 22h",
    open: true,
  },
  {
    id: "e6",
    name: "Mercadinho Bahia",
    segment: "Mercado",
    category: "Hortifruti · Padaria",
    logo: "🛒",
    banner: "linear-gradient(135deg,#C66A3D,#3FA34D)",
    rating: 4.5,
    deliveryTime: "30-45 min",
    deliveryFee: 7.99,
    hours: "Seg a Sáb · 7h às 21h",
    open: true,
  },
];

export const CATALOG: Record<string, Catalog> = {
  e1: {
    Lanches: [
      {
        id: "p1",
        name: "Fogo Burger",
        desc: "Blend 180g, queijo prato, bacon crocante e molho da casa.",
        price: 28.9,
        emoji: "🍔",
      },
      {
        id: "p2",
        name: "Farofa Dog",
        desc: "Salsicha artesanal, farofa crocante e vinagrete.",
        price: 19.5,
        emoji: "🌭",
      },
      {
        id: "p3",
        name: "Sanduíche de Costela",
        desc: "Costela desfiada, cebola caramelizada e barbecue.",
        price: 26.0,
        emoji: "🥪",
      },
    ],
    Pizzas: [
      {
        id: "p4",
        name: "Pizza Calabresa",
        desc: "Molho de tomate, calabresa fatiada e cebola roxa.",
        price: 42.0,
        emoji: "🍕",
      },
    ],
    Bebidas: [
      {
        id: "p5",
        name: "Limonada Suíça",
        desc: "Limão, leite condensado e gelo.",
        price: 9.9,
        emoji: "🍋",
      },
      {
        id: "p6",
        name: "Refrigerante Lata",
        desc: "350ml, gelado.",
        price: 6.0,
        emoji: "🥤",
      },
    ],
    Sobremesas: [
      {
        id: "p7",
        name: "Brownie com Sorvete",
        desc: "Brownie quente com bola de sorvete de creme.",
        price: 16.5,
        emoji: "🍫",
      },
    ],
  },
  e2: {
    Pizzas: [
      {
        id: "p8",
        name: "Margherita",
        desc: "Molho de tomate, mussarela de búfala e manjericão.",
        price: 45.0,
        emoji: "🍕",
      },
      {
        id: "p9",
        name: "Quatro Queijos",
        desc: "Mussarela, provolone, parmesão e gorgonzola.",
        price: 49.9,
        emoji: "🍕",
      },
      {
        id: "p10",
        name: "Pepperoni",
        desc: "Molho de tomate, mussarela e pepperoni importado.",
        price: 47.5,
        emoji: "🍕",
      },
    ],
    Lanches: [
      {
        id: "p11",
        name: "Panini Italiano",
        desc: "Presunto de parma, rúcula e queijo brie.",
        price: 24.0,
        emoji: "🥪",
      },
    ],
    Bebidas: [
      {
        id: "p12",
        name: "Suco de Laranja",
        desc: "300ml natural.",
        price: 8.0,
        emoji: "🍊",
      },
    ],
    Sobremesas: [
      {
        id: "p13",
        name: "Tiramisù",
        desc: "Clássico italiano com café e mascarpone.",
        price: 18.0,
        emoji: "🍰",
      },
    ],
  },
  e3: {
    Sobremesas: [
      {
        id: "p14",
        name: "Açaí 500ml",
        desc: "Com granola, banana e leite em pó.",
        price: 22.0,
        emoji: "🍨",
      },
      {
        id: "p15",
        name: "Milkshake de Morango",
        desc: "400ml, cremoso e geladinho.",
        price: 17.5,
        emoji: "🥤",
      },
      {
        id: "p16",
        name: "Petit Gateau",
        desc: "Com sorvete de creme e calda de chocolate.",
        price: 19.9,
        emoji: "🍫",
      },
    ],
    Bebidas: [
      {
        id: "p17",
        name: "Água de Coco",
        desc: "Gelada, 300ml.",
        price: 7.0,
        emoji: "🥥",
      },
    ],
  },
  e4: {
    Bebidas: [
      {
        id: "p18",
        name: "Suco Verde Detox",
        desc: "Couve, maçã, limão e gengibre.",
        price: 13.0,
        emoji: "🥬",
      },
      {
        id: "p19",
        name: "Suco de Melancia",
        desc: "500ml, natural e gelado.",
        price: 11.0,
        emoji: "🍉",
      },
      {
        id: "p20",
        name: "Vitamina de Banana",
        desc: "Banana, leite e aveia.",
        price: 12.5,
        emoji: "🍌",
      },
    ],
    Lanches: [
      {
        id: "p21",
        name: "Wrap Fit de Frango",
        desc: "Frango grelhado, alface e cenoura.",
        price: 21.0,
        emoji: "🌯",
      },
    ],
  },
  e5: {
    Medicamentos: [
      {
        id: "p22",
        name: "Analgésico 500mg",
        desc: "Caixa com 20 comprimidos.",
        price: 12.9,
        emoji: "💊",
      },
      {
        id: "p23",
        name: "Vitamina C Efervescente",
        desc: "Tubo com 10 comprimidos, sabor laranja.",
        price: 18.5,
        emoji: "🍊",
      },
    ],
    Higiene: [
      {
        id: "p24",
        name: "Álcool em Gel 500ml",
        desc: "Antisséptico para as mãos.",
        price: 14.0,
        emoji: "🧴",
      },
      {
        id: "p25",
        name: "Escova de Dente Macia",
        desc: "Cabeça compacta, cerdas macias.",
        price: 8.9,
        emoji: "🪥",
      },
    ],
    Beleza: [
      {
        id: "p26",
        name: "Protetor Solar FPS 60",
        desc: "120ml, toque seco.",
        price: 39.9,
        emoji: "🧴",
      },
    ],
  },
  e6: {
    Hortifruti: [
      {
        id: "p27",
        name: "Banana Prata (kg)",
        desc: "Selecionada, doce e madura no ponto.",
        price: 6.5,
        emoji: "🍌",
      },
      {
        id: "p28",
        name: "Tomate (kg)",
        desc: "Fresco, ideal para molhos e saladas.",
        price: 8.9,
        emoji: "🍅",
      },
    ],
    Padaria: [
      {
        id: "p29",
        name: "Pão Francês (kg)",
        desc: "Assado na hora, casquinha crocante.",
        price: 12.0,
        emoji: "🥖",
      },
      {
        id: "p30",
        name: "Beiju de Tapioca",
        desc: "Pacote com 6 unidades.",
        price: 9.9,
        emoji: "🫓",
      },
    ],
    Limpeza: [
      {
        id: "p31",
        name: "Detergente Neutro",
        desc: "500ml.",
        price: 3.5,
        emoji: "🧼",
      },
    ],
  },
};

/**
 * Pedidos mockados usados na Área do Estabelecimento e na Área do Entregador.
 * Em produção viriam de uma API/DB e seriam filtrados por login.
 */
export const ORDERS: Order[] = [
  {
    id: "PD-1042",
    establishmentId: "e1",
    customerName: "Marina Alves",
    address: "Rua das Acácias, 120 - Centro",
    items: [
      { name: "Fogo Burger", qty: 2 },
      { name: "Refrigerante Lata", qty: 1 },
    ],
    total: 63.8,
    status: "Recebido",
    createdAt: "18:42",
    deliveryFee: 6.99,
  },
  {
    id: "PD-1043",
    establishmentId: "e1",
    customerName: "Diego Souza",
    address: "Av. Brasil, 850 - Jardim Europa",
    items: [
      { name: "Farofa Dog", qty: 1 },
      { name: "Limonada Suíça", qty: 1 },
    ],
    total: 29.4,
    status: "Em preparo",
    createdAt: "18:35",
    deliveryFee: 6.99,
  },
  {
    id: "PD-1044",
    establishmentId: "e1",
    customerName: "Carla Nunes",
    address: "Rua XV de Novembro, 45 - Bela Vista",
    items: [
      { name: "Sanduíche de Costela", qty: 1 },
      { name: "Brownie com Sorvete", qty: 1 },
    ],
    total: 42.5,
    status: "Pronto",
    createdAt: "18:20",
    deliveryFee: 6.99,
  },
  {
    id: "PD-1045",
    establishmentId: "e1",
    customerName: "Bruno Lima",
    address: "Rua dos Ipês, 300 - Vila Nova",
    items: [{ name: "Pizza Calabresa", qty: 1 }],
    total: 48.99,
    status: "Pronto",
    createdAt: "18:15",
    deliveryFee: 6.99,
  },
  {
    id: "PD-1046",
    establishmentId: "e1",
    customerName: "Fernanda Rocha",
    address: "Alameda Santos, 210 - Centro",
    items: [{ name: "Fogo Burger", qty: 1 }],
    total: 35.89,
    status: "Saiu para entrega",
    createdAt: "17:58",
    deliveryFee: 6.99,
  },
  {
    id: "PD-1047",
    establishmentId: "e1",
    customerName: "Tiago Martins",
    address: "Rua Coronel Prado, 78 - Centro",
    items: [
      { name: "Farofa Dog", qty: 2 },
      { name: "Refrigerante Lata", qty: 2 },
    ],
    total: 51.0,
    status: "Entregue",
    createdAt: "17:30",
    deliveryFee: 6.99,
  },
];

/** Perfil mockado do entregador logado (sem autenticação real). */
export const DELIVERY_PERSON: DeliveryPerson = {
  name: "Rafael Menezes",
  avatar: "🛵",
  rating: 4.9,
  vehicle: "Moto · Placa fictícia ABC-1234",
  todayDeliveries: 8,
  todayEarnings: 96.4,
};
