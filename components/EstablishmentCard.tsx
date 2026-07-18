"use client";

import { Star, Clock, Bike } from "lucide-react";
import { Establishment } from "@/lib/types";
import { currency } from "@/lib/utils";

interface EstablishmentCardProps {
  establishment: Establishment;
  onSelect: (e: Establishment) => void;
}

export function EstablishmentCard({ establishment: e, onSelect }: EstablishmentCardProps) {
  return (
    <button
      onClick={() => e.open && onSelect(e)}
      disabled={!e.open}
      className={`text-left bg-white rounded-2xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 ${
        !e.open ? "opacity-60 cursor-not-allowed" : ""
      }`}
    >
      <div
        className="h-28 flex items-center justify-center text-4xl relative"
        style={{ background: e.banner }}
      >
        {e.logo}
        <span className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/90 text-ink">
          {e.segment}
        </span>
        <span
          className={`absolute top-2.5 right-2.5 text-[11px] font-bold px-2 py-0.5 rounded-full ${
            e.open ? "bg-verde text-white" : "bg-white/80 text-black/50"
          }`}
        >
          {e.open ? "Aberto" : "Fechado"}
        </span>
      </div>
      <div className="p-3.5">
        <h3 className="font-display font-bold text-ink text-lg leading-tight">
          {e.name}
        </h3>
        <p className="text-xs text-black/45 mt-0.5">{e.category}</p>
        <div className="flex items-center gap-3 mt-2.5 text-xs text-black/55 flex-wrap">
          <span className="flex items-center gap-1 font-semibold text-ink">
            <Star size={13} className="fill-terracota text-terracota" />
            {e.rating}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={13} /> {e.deliveryTime}
          </span>
          <span className="flex items-center gap-1">
            <Bike size={13} /> {currency(e.deliveryFee)}
          </span>
        </div>
      </div>
    </button>
  );
}
