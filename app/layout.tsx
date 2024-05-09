import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./(root)/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/root/ui/header";

const dmSans = DM_Sans({ subsets: ["latin"] });

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.png" />
      </head>
      <body className="bg-wow">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
