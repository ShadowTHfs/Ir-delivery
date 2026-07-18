"use client";

import { MapPin, Store } from "lucide-react";
import { Order, Establishment } from "@/lib/types";
import { currency } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface DeliveryCardProps {
  order: Order;
  establishment?: Establishment;
  actionLabel: string;
  onAction: (id: string) => void;
}

export function DeliveryCard({
  order,
  establishment,
  actionLabel,
  onAction,
}: DeliveryCardProps) {
  return (
    <div className="bg-white border border-black/5 rounded-xl p-3.5">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-display font-bold text-ink text-sm">{order.id}</p>
          <p className="text-xs text-black/45 flex items-center gap-1 mt-0.5">
            <Store size={12} /> {establishment?.name ?? "Estabelecimento"}
          </p>
        </div>
        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-terracota/10 text-terracota whitespace-nowrap">
          {currency(order.deliveryFee)}
        </span>
      </div>

      <p className="text-xs text-black/45 flex items-start gap-1 mt-2.5">
        <MapPin size={12} className="mt-0.5 shrink-0" />
        {order.customerName} · {order.address}
      </p>

      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-dashed border-black/10">
        <span className="text-xs text-black/45">
          Pedido: <span className="font-bold text-ink">{currency(order.total)}</span>
        </span>
        <Button size="sm" onClick={() => onAction(order.id)}>
          {actionLabel}
        </Button>
      </div>
    </div>
  );
}
