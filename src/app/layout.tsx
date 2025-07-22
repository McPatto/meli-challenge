import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MercadoLiebre - Encontrá lo que buscás",
    template: "%s | MercadoLiebre"
  },
  description: "Descubrí los mejores productos con los precios más bajos. Envío gratis en miles de productos.",
  keywords: ["ecommerce", "productos", "compras online", "envío gratis"],
  openGraph: {
    title: "MercadoLiebre - Encontrá lo que buscás",
    description: "Descubrí los mejores productos con los precios más bajos. Envío gratis en miles de productos.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MercadoLiebre - Encontrá lo que buscás",
    description: "Descubrí los mejores productos con los precios más bajos. Envío gratis en miles de productos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen flex flex-col`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
