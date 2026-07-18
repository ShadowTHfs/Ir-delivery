"use client";

import { ChevronLeft, Star, Clock, Bike } from "lucide-react";
import { Establishment } from "@/lib/types";
import { currency } from "@/lib/utils";

interface EstablishmentBannerProps {
  establishment: Establishment;
  onBack: () => void;
}

export function EstablishmentBanner({ establishment, onBack }: EstablishmentBannerProps) {
  return (
    <>
      <div
        className="h-40 md:h-56 relative flex items-end"
        style={{ background: establishment.banner }}
      >
        <button
          onClick={onBack}
          className="absolute top-4 left-4 bg-white/90 hover:bg-white text-ink rounded-full p-2 shadow"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="absolute -bottom-8 left-4 md:left-6 w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center text-4xl border-4 border-white">
          {establishment.logo}
        </div>
      </div>

      <div className="px-4 md:px-6 pt-11 pb-2">
        <div className="flex items-center gap-2">
          <h1 className="font-display font-extrabold text-2xl md:text-3xl text-ink">
            {establishment.name}
          </h1>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-cream text-ink">
            {establishment.segment}
          </span>
        </div>
        <p className="text-sm text-black/45">{establishment.category}</p>
        <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-black/55">
          <span className="flex items-center gap-1 font-semibold text-ink">
            <Star size={15} className="fill-terracota text-terracota" />
            {establishment.rating}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={15} /> {establishment.deliveryTime}
          </span>
          <span className="flex items-center gap-1">
            <Bike size={15} /> {currency(establishment.deliveryFee)}
          </span>
          <span className="text-xs bg-cream px-2.5 py-1 rounded-full">
            {establishment.hours}
          </span>
        </div>
      </div>
    </>
  );
}
