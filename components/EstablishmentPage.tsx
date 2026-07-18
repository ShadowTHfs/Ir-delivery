"use client";

import { useState } from "react";
import { Establishment, Product } from "@/lib/types";
import { CATALOG } from "@/lib/mock-data";
import { EstablishmentBanner } from "@/components/EstablishmentBanner";
import { CategorySection } from "@/components/CategorySection";
import { ProductCard } from "@/components/ProductCard";

interface EstablishmentPageProps {
  establishment: Establishment;
  onBack: () => void;
  onAdd: (product: Product, establishment: Establishment) => void;
}

export function EstablishmentPage({ establishment, onBack, onAdd }: EstablishmentPageProps) {
  const catalog = CATALOG[establishment.id] || {};
  const categories = Object.keys(catalog);
  const [activeCat, setActiveCat] = useState<string>(categories[0]);

  return (
    <div className="max-w-6xl mx-auto pb-16">
      <EstablishmentBanner establishment={establishment} onBack={onBack} />

      <CategorySection categories={categories} active={activeCat} onChange={setActiveCat} />

      <div className="px-4 md:px-6 mt-4 grid sm:grid-cols-2 gap-3">
        {(catalog[activeCat] || []).map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAdd={(prod) => onAdd(prod, establishment)}
          />
        ))}
      </div>
    </div>
  );
}
