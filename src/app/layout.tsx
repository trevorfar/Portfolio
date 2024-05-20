import type { Metadata } from "next"
import { Gabarito } from "next/font/google"
import "./globals.css"
import { Suspense } from "react"
import Navbar from "@/Components/Navbar"

const gabarito = Gabarito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trevor Farias - Portfolio",
  description: "Trevor Farias's Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./favicon.ico" />
      </head>
      <body className={gabarito.className}>
        {/* ADD NAVBAR */}
        <Navbar />

        <div className="z-20">{children}</div>
        <div className="fixed top-0 w-full z-[-1] opacity-50 dark:opacity-30"></div>
        {/* Analytics and SpeedInsights components*/}
      </body>
    </html>
  )
}
