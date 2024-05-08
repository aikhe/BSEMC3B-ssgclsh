import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./(root)/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/root/ui/header";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hjkl",
  description: "The only Next-js template that will suite my need",
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
      <body>
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
