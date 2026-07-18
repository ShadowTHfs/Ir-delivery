"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Store, Bike, Lock, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserRole } from "@/lib/types";

/**
 * Login apenas para DEMONSTRAÇÃO — não há autenticação real, nenhuma senha
 * é validada contra um backend. Serve só para mostrar que o app terá 3
 * perfis de acesso distintos.
 */
const DEMO_USERS: Record<string, { role: UserRole; path: string }> = {
  user1: { role: "cliente", path: "/cliente" },
  user2: { role: "estabelecimento", path: "/estabelecimento" },
  user3: { role: "entregador", path: "/entregador" },
};

const ROLE_CARDS: {
  username: string;
  label: string;
  desc: string;
  icon: typeof User;
}[] = [
  { username: "user1", label: "Cliente", desc: "Pedir em restaurantes, farmácias e mercados", icon: User },
  { username: "user2", label: "Estabelecimento", desc: "Gerenciar pedidos e cardápio", icon: Store },
  { username: "user3", label: "Entregador", desc: "Aceitar e concluir entregas", icon: Bike },
];

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const selectRole = (u: string) => {
    setUsername(u);
    setPassword("1234");
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = DEMO_USERS[username.trim().toLowerCase()];
    if (!user || password !== "1234") {
      setError("Usuário ou senha inválidos. Use user1, user2 ou user3 com a senha 1234.");
      return;
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem("ira-role", user.role);
      window.localStorage.setItem("ira-username", username.trim().toLowerCase());
    }
    router.push(user.path);
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="font-display font-extrabold text-4xl text-ink tracking-tight">
            IR<span className="text-verde">Á</span>
          </h1>
          <p className="text-sm text-black/50 mt-2">
            Praticidade na palma da mão.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-6">
          <p className="text-xs font-semibold text-black/45 uppercase tracking-wide mb-3">
            Entrar como
          </p>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {ROLE_CARDS.map((r) => {
              const Icon = r.icon;
              const active = username === r.username;
              return (
                <button
                  key={r.username}
                  type="button"
                  onClick={() => selectRole(r.username)}
                  className={`flex flex-col items-center gap-1.5 py-3 rounded-xl border-2 text-[11px] font-semibold transition-colors ${
                    active
                      ? "border-azul bg-azul/5 text-azul"
                      : "border-black/10 text-black/50 hover:border-azul/50"
                  }`}
                >
                  <Icon size={18} />
                  {r.label}
                </button>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-black/50 flex items-center gap-1.5 mb-1">
                <User size={13} /> Usuário
              </label>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="user1, user2 ou user3"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-black/50 flex items-center gap-1.5 mb-1">
                <Lock size={13} /> Senha
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="1234"
              />
            </div>

            {error && (
              <p className="text-xs text-[#b3441f] flex items-start gap-1.5 bg-[#fbeee7] rounded-lg px-2.5 py-2">
                <AlertCircle size={14} className="shrink-0 mt-0.5" />
                {error}
              </p>
            )}

            <Button type="submit" className="w-full py-5 mt-1">
              Entrar
            </Button>
          </form>
        </div>

        <p className="text-center text-[11px] text-black/35 mt-5">
          Demonstração sem autenticação real — senha para todos os perfis: <strong>1234</strong>
        </p>
      </div>
    </div>
  );
}
