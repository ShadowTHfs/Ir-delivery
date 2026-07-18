"use client";

import { Plus } from "lucide-react";
import { Product } from "@/lib/types";
import { currency } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  onAdd: (p: Product) => void;
}

export function ProductCard({ product: p, onAdd }: ProductCardProps) {
  return (
    <div className="flex items-center gap-3 bg-white border border-black/5 rounded-xl p-3 hover:border-verde/40 transition-colors">
      <div className="w-16 h-16 shrink-0 rounded-lg bg-cream flex items-center justify-center text-3xl">
        {p.emoji}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-ink text-sm">{p.name}</h4>
        <p className="text-xs text-black/45 mt-0.5 line-clamp-2">{p.desc}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-ink text-sm">{currency(p.price)}</span>
          <Button size="sm" onClick={() => onAdd(p)}>
            <Plus size={13} /> Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
}
