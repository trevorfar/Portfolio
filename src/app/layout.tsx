import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "@/Components/Navbar";
import Script from "next/script";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trevor Farias - Portfolio",
  description: "Trevor Farias's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/icon.ico" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-89V3F68XVJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-89V3F68XVJ');
          `}
        </Script>
      </head>
      <body className={gabarito.className}>
        <Navbar />
        <div className="z-20">{children}</div>
        <div className="fixed top-0 w-full z-[-1] opacity-50 dark:opacity-30"></div>
      </body>
    </html>
  );
}
