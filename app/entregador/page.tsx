"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { ORDERS, ESTABLISHMENTS, DELIVERY_PERSON } from "@/lib/mock-data";
import { Order } from "@/lib/types";
import { DeliveryCard } from "@/components/delivery-area/DeliveryCard";
import { EarningsSummary } from "@/components/delivery-area/EarningsSummary";

const establishmentOf = (order: Order) =>
  ESTABLISHMENTS.find((e) => e.id === order.establishmentId);

export default function EntregadorArea() {
  // Pedidos "Pronto" ainda sem entregador designado.
  const [available, setAvailable] = useState<Order[]>(
    ORDERS.filter((o) => o.status === "Pronto")
  );
  // Pedido aceito pelo entregador nesta sessão de demonstração.
  const [current, setCurrent] = useState<Order | null>(
    ORDERS.find((o) => o.status === "Saiu para entrega") ?? null
  );
  const [deliveries, setDeliveries] = useState(DELIVERY_PERSON.todayDeliveries);
  const [earnings, setEarnings] = useState(DELIVERY_PERSON.todayEarnings);

  const acceptDelivery = (id: string) => {
    const order = available.find((o) => o.id === id);
    if (!order) return;
    setAvailable((prev) => prev.filter((o) => o.id !== id));
    setCurrent({ ...order, status: "Saiu para entrega" });
  };

  const completeDelivery = () => {
    if (!current) return;
    setDeliveries((d) => d + 1);
    setEarnings((e) => e + current.deliveryFee);
    setCurrent(null);
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-ink text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-5 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-3xl shrink-0">
            {DELIVERY_PERSON.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-display font-extrabold text-xl md:text-2xl">
              {DELIVERY_PERSON.name}
            </h1>
            <div className="flex items-center gap-3 text-xs text-white/50 mt-1">
              <span className="flex items-center gap-1">
                <Star size={12} className="fill-terracota text-terracota" />
                {DELIVERY_PERSON.rating}
              </span>
              <span>{DELIVERY_PERSON.vehicle}</span>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-5 space-y-6">
        <EarningsSummary
          person={{ ...DELIVERY_PERSON, todayDeliveries: deliveries, todayEarnings: earnings }}
        />

        <section>
          <h2 className="text-sm font-bold text-black/45 uppercase tracking-wide mb-2.5">
            Entrega atual
          </h2>
          {current ? (
            <DeliveryCard
              order={current}
              establishment={establishmentOf(current)}
              actionLabel="Confirmar entrega"
              onAction={completeDelivery}
            />
          ) : (
            <p className="text-sm text-black/45 bg-white border border-dashed border-black/10 rounded-xl py-6 text-center">
              Você não está com nenhuma entrega em andamento. Aceite uma entrega disponível abaixo.
            </p>
          )}
        </section>

        <section>
          <h2 className="text-sm font-bold text-black/45 uppercase tracking-wide mb-2.5">
            Entregas disponíveis ({available.length})
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {available.map((o) => (
              <DeliveryCard
                key={o.id}
                order={o}
                establishment={establishmentOf(o)}
                actionLabel="Aceitar entrega"
                onAction={acceptDelivery}
              />
            ))}
            {available.length === 0 && (
              <p className="text-sm text-black/45 col-span-full py-6 text-center">
                Nenhuma entrega disponível no momento.
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
