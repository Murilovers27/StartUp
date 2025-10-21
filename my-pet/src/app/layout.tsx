
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./style.css";
// 1. Importar o Navbar
import Navbar from "../componentes/NavBar";
// 2. Importar o Footer (Assumindo o mesmo caminho de componentes)
import Footer from "../componentes/Footer"; 

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ]
})

export const metadata: Metadata = {
  // 💡 Sugestão: Atualize o título e a descrição para o "MyPetZone"
  title: "MyPetZone | Encontre Seu Novo Melhor Amigo",
  description: "Plataforma de adoção de pets para conectar animais e lares amorosos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        {/* Componente Navbar (Header) */}
        <Navbar />
        
        {/* Conteúdo da Página (page.tsx) */}
        {children}
        
        {/* Componente Footer (Rodapé) - Adicionado aqui */}
        <Footer />
      </body>
    </html>
  );
}