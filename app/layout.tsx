import type { Metadata } from "next";
import { Titan_One } from "next/font/google";
import "./(landing)/styles/globals.scss";
import { Header } from "@/components/landing/ui/header";

const titanOne = Titan_One({
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
    <html
      className="scroll-smooth"
      lang="en"
      data-theme="fantasy"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
      </head>
      <body className={`${titanOne.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
