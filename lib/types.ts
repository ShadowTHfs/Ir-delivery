export interface Establishment {
  id: string;
  name: string;
  segment: string; // ex.: "Restaurante", "Farmácia", "Mercado"
  category: string; // texto exibido no card, ex.: "Brasileira · Lanches"
  logo: string; // emoji usado como logo ilustrativo
  banner: string; // gradiente CSS usado como banner ilustrativo
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  hours: string;
  open: boolean;
}

export interface Product {
  id: string;
  name: string;
  desc: string;
  price: number;
  emoji: string;
}

/** Catálogo de um estabelecimento: categorias livres (variam por segmento). */
export type Catalog = Record<string, Product[]>;

export interface CartItem extends Product {
  qty: number;
}

export type OrderStatus =
  | "Recebido"
  | "Em preparo"
  | "Pronto"
  | "Saiu para entrega"
  | "Entregue";

export interface OrderItem {
  name: string;
  qty: number;
}

export interface Order {
  id: string;
  establishmentId: string;
  customerName: string;
  address: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  createdAt: string; // horário ilustrativo, ex. "18:42"
  deliveryFee: number;
}

export interface DeliveryPerson {
  name: string;
  avatar: string; // emoji usado como avatar ilustrativo
  rating: number;
  vehicle: string;
  todayDeliveries: number;
  todayEarnings: number;
}

/** Papel de acesso na demonstração de login (sem autenticação real). */
export type UserRole = "cliente" | "estabelecimento" | "entregador";
