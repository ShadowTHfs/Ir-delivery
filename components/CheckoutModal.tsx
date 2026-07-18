"use client";

import { useState } from "react";
import {
  X,
  User,
  Phone,
  MapPin,
  QrCode,
  Wallet,
  CreditCard,
  CheckCircle2,
} from "lucide-react";
import { currency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type PaymentMethod = "pix" | "dinheiro" | "cartao";

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
  total: number;
  onConfirm: () => void;
  success: boolean;
}

const PAYMENT_OPTIONS: { id: PaymentMethod; label: string; icon: typeof QrCode }[] = [
  { id: "pix", label: "PIX", icon: QrCode },
  { id: "dinheiro", label: "Dinheiro", icon: Wallet },
  { id: "cartao", label: "Cartão", icon: CreditCard },
];

export function CheckoutModal({
  open,
  onClose,
  total,
  onConfirm,
  success,
}: CheckoutModalProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "pix" as PaymentMethod,
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="absolute inset-0 bg-black/50" />
      <div className="relative bg-cream rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        {success ? (
          <div className="p-8 text-center">
            <CheckCircle2 size={56} className="mx-auto text-verde mb-3" />
            <h3 className="font-display text-xl font-extrabold text-ink">
              Pedido realizado com sucesso!
            </h3>
            <p className="text-sm text-black/45 mt-2">
              Essa é apenas uma demonstração — nenhum dado foi salvo.
            </p>
            <Button variant="dark" onClick={onClose} className="mt-5 px-6">
              Fechar
            </Button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between p-4 border-b border-black/10 bg-ink text-white">
              <h2 className="font-display font-bold text-lg">Finalizar pedido</h2>
              <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full">
                <X size={20} />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onConfirm();
              }}
              className="p-5 space-y-3.5"
            >
              <div>
                <label className="text-xs font-semibold text-black/50 flex items-center gap-1.5 mb-1">
                  <User size={13} /> Nome
                </label>
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-black/50 flex items-center gap-1.5 mb-1">
                  <Phone size={13} /> Telefone
                </label>
                <Input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-black/50 flex items-center gap-1.5 mb-1">
                  <MapPin size={13} /> Endereço
                </label>
                <Input
                  required
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="Rua, número, bairro"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-black/50 mb-1.5 block">
                  Forma de pagamento
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {PAYMENT_OPTIONS.map((opt) => {
                    const Icon = opt.icon;
                    const active = form.payment === opt.id;
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setForm({ ...form, payment: opt.id })}
                        className={`flex flex-col items-center gap-1 py-2.5 rounded-lg border-2 text-xs font-semibold transition-colors ${
                          active
                            ? "border-verde bg-verde/5 text-ink"
                            : "border-black/10 text-black/45 hover:border-verde/50"
                        }`}
                      >
                        <Icon size={18} />
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-between text-sm font-bold text-ink pt-2 border-t border-dashed border-black/10">
                <span>Total do pedido</span>
                <span>{currency(total)}</span>
              </div>

              <Button type="submit" className="w-full py-6">
                Confirmar Pedido
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
