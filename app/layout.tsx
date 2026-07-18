import type { Metadata } from "next";
import "./globals.css";
import { AreaSwitcher } from "@/components/AreaSwitcher";

export const metadata: Metadata = {
  title: "IRÁ — peça aqui",
  description:
    "Demonstração visual de um delivery multi-segmento (restaurantes, farmácias, mercados) — MVP em Next.js, React, TypeScript e Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-body text-ink antialiased">
        <AreaSwitcher />
        {children}
      </body>
    </html>
  );
}
