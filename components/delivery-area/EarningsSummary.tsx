import { Bike, Wallet } from "lucide-react";
import { DeliveryPerson } from "@/lib/types";
import { currency } from "@/lib/utils";

interface EarningsSummaryProps {
  person: DeliveryPerson;
}

export function EarningsSummary({ person }: EarningsSummaryProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="bg-white border border-black/5 rounded-xl p-4">
        <div className="flex items-center gap-2 text-black/45 text-xs font-semibold uppercase tracking-wide">
          <Bike size={14} /> Entregas hoje
        </div>
        <p className="font-display font-extrabold text-2xl text-ink mt-1">
          {person.todayDeliveries}
        </p>
      </div>
      <div className="bg-white border border-black/5 rounded-xl p-4">
        <div className="flex items-center gap-2 text-black/45 text-xs font-semibold uppercase tracking-wide">
          <Wallet size={14} /> Ganhos hoje
        </div>
        <p className="font-display font-extrabold text-2xl text-ink mt-1">
          {currency(person.todayEarnings)}
        </p>
      </div>
    </div>
  );
}
