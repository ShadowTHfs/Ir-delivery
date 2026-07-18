"use client";

import { Clock, MapPin, ChevronRight } from "lucide-react";
import { Order, OrderStatus } from "@/lib/types";
import { currency } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const STATUS_FLOW: OrderStatus[] = [
  "Recebido",
  "Em preparo",
  "Pronto",
  "Saiu para entrega",
  "Entregue",
];

const STATUS_STYLES: Record<OrderStatus, string> = {
  Recebido: "bg-terracota/10 text-terracota",
  "Em preparo": "bg-[#fdeee3] text-terracota",
  Pronto: "bg-azul/10 text-azul",
  "Saiu para entrega": "bg-verde/10 text-verde",
  Entregue: "bg-black/5 text-black/50",
};

interface OrderCardProps {
  order: Order;
  onAdvance: (id: string) => void;
}

export function OrderCard({ order, onAdvance }: OrderCardProps) {
  const currentIndex = STATUS_FLOW.indexOf(order.status);
  const nextStatus = STATUS_FLOW[currentIndex + 1];

  return (
    <div className="bg-white border border-black/5 rounded-xl p-3.5">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-display font-bold text-ink text-sm">{order.id}</p>
          <p className="text-xs text-black/45 flex items-center gap-1 mt-0.5">
            <Clock size={12} /> {order.createdAt}
          </p>
        </div>
        <span
          className={`text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${STATUS_STYLES[order.status]}`}
        >
          {order.status}
        </span>
      </div>

      <div className="mt-2.5 space-y-0.5">
        {order.items.map((it, idx) => (
          <p key={idx} className="text-sm text-black/55">
            <span className="font-semibold text-ink">{it.qty}x</span> {it.name}
          </p>
        ))}
      </div>

      <p className="text-xs text-black/45 flex items-center gap-1 mt-2">
        <MapPin size={12} /> {order.customerName} · {order.address}
      </p>

      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-dashed border-black/10">
        <span className="font-bold text-ink text-sm">{currency(order.total)}</span>
        {nextStatus ? (
          <Button size="sm" variant="dark" onClick={() => onAdvance(order.id)}>
            Marcar {nextStatus} <ChevronRight size={13} />
          </Button>
        ) : (
          <span className="text-xs text-black/45 font-semibold">Pedido concluído</span>
        )}
      </div>
    </div>
  );
}
