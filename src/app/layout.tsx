import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ReactQueryClientProvider } from "@/components/Provider";
import ButtonWhatsapp from "@/components/button-whatsapp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Depósito Pakatnamú",
  description: "Página web de Depósito Pakatnamú",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html className="hiddenScroll" lang="es" suppressHydrationWarning>
        <body
          className={`${poppins.variable} bg-background`}
          style={{
            backgroundImage: "url('/pattern.svg')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
            // backgroundColor: "rgba(223, 223, 223, 0.4)",
          }}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="absolute top-0 left-0 z-10 w-20 h-20 md:w-32 md:h-32"
            style={{
              filter: "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5))",
            }}
          />
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
