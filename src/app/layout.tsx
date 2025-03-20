import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ReactQueryClientProvider } from "@/components/Provider";
import ButtonWhatsapp from "@/components/button-whatsapp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Depósito Pakatnamú",
  description: "Página web de Depósito Pakatnamú",
};

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="es" suppressHydrationWarning>
        <body className={`${roboto.variable}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
            <Toaster />
            <ButtonWhatsapp />
          </ThemeProvider>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
