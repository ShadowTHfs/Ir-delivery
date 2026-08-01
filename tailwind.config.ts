import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Identidade IRÁ
        ink: "#2D2D2D", // Grafite
        cream: "#F5EBD7", // Creme Farinha
        verde: "#3FA34D", // Verde Mandioca — ações primárias
        azul: "#0E5AA7", // Azul Irará — navegação/foco/confiança
        terracota: "#C66A3D", // Terracota Cerâmica — destaques e selos
        sorvete: "#D6558C", // rosa usado só no ícone da categoria Sorveterias
        petshop: "#6B4226", // marrom usado só no ícone da categoria Pet Shops
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
