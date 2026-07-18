"use client";

import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  query: string;
  setQuery: (q: string) => void;
  cartCount: number;
  onCartClick: () => void;
}

export function Header({ query, setQuery, cartCount, onCartClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center gap-3 md:gap-6">
        <Link href="/cliente" className="shrink-0">
          <span className="font-display text-xl md:text-2xl font-extrabold tracking-tight text-ink">
            IR<span className="text-verde">Á</span>
          </span>
        </Link>

        <div className="flex-1 relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30"
          />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar restaurantes, farmácias, mercados..."
            className="rounded-full pl-10 bg-cream/60 border-transparent"
          />
        </div>

        <button
          onClick={onCartClick}
          className="relative shrink-0 bg-verde hover:bg-[#358f42] text-white rounded-full p-2.5 md:px-4 md:py-2 flex items-center gap-2 font-bold transition-colors"
        >
          <ShoppingCart size={20} />
          <span className="hidden md:inline">Carrinho</span>
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-terracota text-white text-xs font-extrabold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
