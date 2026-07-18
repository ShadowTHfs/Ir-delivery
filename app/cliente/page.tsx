"use client";

import { useMemo, useState } from "react";
import { Establishment, Product, CartItem } from "@/lib/types";
import { ESTABLISHMENTS } from "@/lib/mock-data";
import { Header } from "@/components/Header";
import { EstablishmentCard } from "@/components/EstablishmentCard";
import { EstablishmentPage } from "@/components/EstablishmentPage";
import { Cart } from "@/components/Cart";
import { CheckoutModal } from "@/components/CheckoutModal";

type View = "list" | "establishment";

export default function ClienteArea() {
  const [view, setView] = useState<View>("list");
  const [selected, setSelected] = useState<Establishment | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartEstablishment, setCartEstablishment] = useState<Establishment | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      ESTABLISHMENTS.filter((e) =>
        (e.name + e.category + e.segment).toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const total =
    subtotal + (cart.length > 0 && cartEstablishment ? cartEstablishment.deliveryFee : 0);

  const handleSelect = (e: Establishment) => {
    setSelected(e);
    setView("establishment");
  };

  const handleAdd = (product: Product, establishment: Establishment) => {
    if (
      cartEstablishment &&
      cartEstablishment.id !== establishment.id &&
      cart.length > 0
    ) {
      const ok = window.confirm(
        `Seu carrinho já tem itens de ${cartEstablishment.name}. Deseja limpar e adicionar itens de ${establishment.name}?`
      );
      if (!ok) return;
      setCart([]);
    }
    setCartEstablishment(establishment);
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleConfirmOrder = () => {
    setSuccess(true);
  };

  const closeCheckout = () => {
    setCheckoutOpen(false);
    if (success) {
      setCart([]);
      setCartEstablishment(null);
      setCartOpen(false);
    }
    setSuccess(false);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header
        query={query}
        setQuery={setQuery}
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
      />

      {view === "list" ? (
        <main className="max-w-6xl mx-auto px-4 md:px-6 py-8">
          <div className="mb-6">
            <h1 className="font-display font-extrabold text-2xl md:text-3xl text-ink">
              Restaurantes, farmácias e mercados perto de você
            </h1>
            <p className="text-sm text-black/45 mt-1">
              {filtered.length} estabelecimentos disponíveis
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((e) => (
              <EstablishmentCard key={e.id} establishment={e} onSelect={handleSelect} />
            ))}
            {filtered.length === 0 && (
              <p className="text-sm text-black/45 col-span-full text-center py-10">
                Nenhum estabelecimento encontrado para &quot;{query}&quot;.
              </p>
            )}
          </div>
        </main>
      ) : (
        selected && (
          <EstablishmentPage
            establishment={selected}
            onBack={() => setView("list")}
            onAdd={handleAdd}
          />
        )
      )}

      <Cart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        setCart={setCart}
        establishment={cartEstablishment}
        onCheckout={() => setCheckoutOpen(true)}
      />

      <CheckoutModal
        open={checkoutOpen}
        onClose={closeCheckout}
        total={total}
        onConfirm={handleConfirmOrder}
        success={success}
      />
    </div>
  );
}
