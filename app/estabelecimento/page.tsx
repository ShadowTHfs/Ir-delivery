"use client";

import { useState } from "react";
import { Star, Clock } from "lucide-react";
import { ESTABLISHMENTS, CATALOG, ORDERS } from "@/lib/mock-data";
import { OrderStatus } from "@/lib/types";
import { OrderCard } from "@/components/establishment-area/OrderCard";
import { MenuItemRow } from "@/components/establishment-area/MenuItemRow";

// Estabelecimento "logado" nesta demonstração (sem autenticação real).
const ESTABLISHMENT = ESTABLISHMENTS[0];

const STATUS_FLOW: OrderStatus[] = [
  "Recebido",
  "Em preparo",
  "Pronto",
  "Saiu para entrega",
  "Entregue",
];

type Tab = "pedidos" | "catalogo";

export default function EstabelecimentoArea() {
  const [tab, setTab] = useState<Tab>("pedidos");
  const [open, setOpen] = useState(ESTABLISHMENT.open);
  const [orders, setOrders] = useState(
    ORDERS.filter((o) => o.establishmentId === ESTABLISHMENT.id)
  );
  const [unavailable, setUnavailable] = useState<Set<string>>(new Set());

  const advanceOrder = (id: string) => {
    setOrders((prev) =>
      prev.map((o) => {
        if (o.id !== id) return o;
        const idx = STATUS_FLOW.indexOf(o.status);
        const next = STATUS_FLOW[idx + 1] ?? o.status;
        return { ...o, status: next };
      })
    );
  };

  const toggleAvailability = (id: string) => {
    setUnavailable((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const activeOrders = orders.filter((o) => o.status !== "Entregue");
  const doneOrders = orders.filter((o) => o.status === "Entregue");
  const catalog = CATALOG[ESTABLISHMENT.id] || {};
  const categories = Object.keys(catalog);

  return (
    <div className="min-h-screen bg-cream">
      {/* Cabeçalho do estabelecimento */}
      <div className="bg-ink text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-5 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-3xl shrink-0">
            {ESTABLISHMENT.logo}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="font-display font-extrabold text-xl md:text-2xl">
                {ESTABLISHMENT.name}
              </h1>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10">
                {ESTABLISHMENT.segment}
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-white/50 mt-1">
              <span className="flex items-center gap-1">
                <Star size={12} className="fill-terracota text-terracota" /> {ESTABLISHMENT.rating}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} /> {ESTABLISHMENT.deliveryTime}
              </span>
            </div>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold border-2 transition-colors shrink-0 ${
              open ? "bg-verde text-white border-verde" : "bg-transparent text-white/60 border-white/20"
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${open ? "bg-white" : "bg-white/50"}`} />
            {open ? "Loja aberta" : "Loja fechada"}
          </button>
        </div>
      </div>

      {/* Abas */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-4 flex gap-2">
        {(["pedidos", "catalogo"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm font-bold border-b-2 -mb-px transition-colors ${
              tab === t ? "text-azul border-azul" : "text-black/45 border-transparent hover:text-ink"
            }`}
          >
            {t === "pedidos" ? `Pedidos (${activeOrders.length})` : "Catálogo"}
          </button>
        ))}
      </div>

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-5">
        {tab === "pedidos" ? (
          <div className="space-y-6">
            <section>
              <h2 className="text-sm font-bold text-black/45 uppercase tracking-wide mb-2.5">
                Em andamento
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeOrders.map((o) => (
                  <OrderCard key={o.id} order={o} onAdvance={advanceOrder} />
                ))}
                {activeOrders.length === 0 && (
                  <p className="text-sm text-black/45 col-span-full py-6 text-center">
                    Nenhum pedido em andamento no momento.
                  </p>
                )}
              </div>
            </section>

            {doneOrders.length > 0 && (
              <section>
                <h2 className="text-sm font-bold text-black/45 uppercase tracking-wide mb-2.5">
                  Concluídos hoje
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {doneOrders.map((o) => (
                    <OrderCard key={o.id} order={o} onAdvance={advanceOrder} />
                  ))}
                </div>
              </section>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            {categories.map((cat) => (
              <section key={cat}>
                <h2 className="text-sm font-bold text-black/45 uppercase tracking-wide mb-2.5">
                  {cat}
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {(catalog[cat] || []).map((p) => (
                    <MenuItemRow
                      key={p.id}
                      product={p}
                      available={!unavailable.has(p.id)}
                      onToggle={toggleAvailability}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
