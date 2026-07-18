"use client";

import { Product } from "@/lib/types";
import { currency } from "@/lib/utils";

interface MenuItemRowProps {
  product: Product;
  available: boolean;
  onToggle: (id: string) => void;
}

export function MenuItemRow({ product, available, onToggle }: MenuItemRowProps) {
  return (
    <div className="flex items-center gap-3 bg-white border border-black/5 rounded-xl p-3">
      <div className="w-12 h-12 shrink-0 rounded-lg bg-cream flex items-center justify-center text-2xl">
        {product.emoji}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-ink truncate">{product.name}</p>
        <p className="text-xs text-black/45">{currency(product.price)}</p>
      </div>
      <button
        onClick={() => onToggle(product.id)}
        className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${
          available ? "bg-verde" : "bg-black/15"
        }`}
        aria-label={available ? "Disponível" : "Indisponível"}
      >
        <span
          className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all ${
            available ? "left-5" : "left-0.5"
          }`}
        />
      </button>
    </div>
  );
}
