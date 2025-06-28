import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CabecalhoNavegacao from "./components/Cabecalhos/CabecalhoNavegacao";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gestor Financeiro",
  description: "Aplicação de gestão de contas pessoais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full flex flex-wrap border-[#F0F0F0] border-x-30 border-b-30">
          <div className=" w-full flex flex-col">
            <CabecalhoNavegacao/>
          </div>
          <div className=" w-full flex flex-col">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
