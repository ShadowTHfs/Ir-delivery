"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { User, Store, Bike, LogOut } from "lucide-react";

const AREAS = [
  { href: "/cliente", label: "Cliente", icon: User },
  { href: "/estabelecimento", label: "Estabelecimento", icon: Store },
  { href: "/entregador", label: "Entregador", icon: Bike },
];

/**
 * Barra de demonstração para alternar entre as 3 experiências do MVP.
 * Numa versão com autenticação real, cada área seria acessada por login/role
 * separado em vez deste seletor manual.
 */
export function AreaSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  // A tela de login (raiz) não mostra a barra de áreas.
  if (pathname === "/") return null;

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("ira-role");
      window.localStorage.removeItem("ira-username");
    }
    router.push("/");
  };

  return (
    <div className="bg-ink text-white/70 text-xs">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center gap-1 overflow-x-auto">
        {AREAS.map((area) => {
          const active = pathname === area.href;
          const Icon = area.icon;
          return (
            <Link
              key={area.href}
              href={area.href}
              className={`flex items-center gap-1.5 px-3 py-2 border-b-2 transition-colors shrink-0 font-semibold ${
                active ? "border-verde text-white" : "border-transparent hover:text-white"
              }`}
            >
              <Icon size={13} />
              {area.label}
            </Link>
          );
        })}
        <button
          onClick={handleLogout}
          className="ml-auto flex items-center gap-1.5 px-3 py-2 text-[11px] font-semibold text-white/50 hover:text-white shrink-0"
        >
          <LogOut size={13} />
          Sair
        </button>
      </div>
    </div>
  );
}
