import type { Metadata } from "next";
import { Bungee } from "next/font/google";
import "./(landing)/styles/globals.scss";
import { Header } from "@/components/landing/ui/header";

const bungee = Bungee({
  weight: ["400"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Sausage Clash",
  description: "A thrilling 3D dodgeball game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <link href="https://fonts.cdnfonts.com/css/valorant" rel="stylesheet" />
      </head>
      <body className={`${bungee.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
