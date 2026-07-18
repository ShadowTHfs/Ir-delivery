"use client";

import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react";
import { CartItem, Establishment } from "@/lib/types";
import { currency } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CartProps {
  open: boolean;
  onClose: () => void;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  establishment: Establishment | null;
  onCheckout: () => void;
}

export function Cart({ open, onClose, cart, setCart, establishment, onCheckout }: CartProps) {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const fee = cart.length > 0 && establishment ? establishment.deliveryFee : 0;
  const total = subtotal + fee;

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  };
  const removeItem = (id: string) =>
    setCart((prev) => prev.filter((i) => i.id !== id));

  return (
    <div
      className={`fixed inset-0 z-40 transition-opacity ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div onClick={onClose} className="absolute inset-0 bg-black/40" />
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-sm bg-cream shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-black/10 bg-ink text-white">
          <h2 className="font-display font-bold text-lg flex items-center gap-2">
            <ShoppingCart size={20} /> Seu carrinho
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 ? (
            <div className="text-center text-black/40 mt-16">
              <p className="text-4xl mb-2">🛒</p>
              <p className="text-sm">Seu carrinho está vazio.</p>
              <p className="text-xs mt-1">
                Adicione itens de um estabelecimento para começar.
              </p>
            </div>
          ) : (
            <>
              {establishment && (
                <p className="text-xs text-black/45 mb-1">
                  Pedido em{" "}
                  <span className="font-semibold text-ink">{establishment.name}</span>
                </p>
              )}
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 bg-white border border-black/5 rounded-xl p-2.5"
                >
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-cream flex items-center justify-center text-2xl">
                    {item.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-ink truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-black/45">{currency(item.price)}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      className="w-6 h-6 flex items-center justify-center rounded-full bg-cream hover:bg-[#ecdfc4]"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-sm font-bold w-4 text-center">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      className="w-6 h-6 flex items-center justify-center rounded-full bg-verde text-white hover:bg-[#358f42]"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-[#b3441f] hover:bg-red-50 p-1.5 rounded-full ml-1"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-4 border-t border-black/10 bg-white space-y-1.5">
            <div className="flex justify-between text-sm text-black/55">
              <span>Subtotal</span>
              <span>{currency(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-black/55">
              <span>Taxa de entrega</span>
              <span>{currency(fee)}</span>
            </div>
            <div className="flex justify-between font-bold text-ink text-base pt-1.5 border-t border-dashed border-black/10">
              <span>Total</span>
              <span>{currency(total)}</span>
            </div>
            <Button onClick={onCheckout} className="w-full mt-2 py-6">
              Finalizar Pedido
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
