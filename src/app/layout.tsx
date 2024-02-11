import type { Metadata } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Figtree } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header/header"
import Footer from "@/components/footer/footer"

const figtree = Figtree({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mudanzas TColau",
  description:
    "Mudanzas TColau es una empresa de mudanzas en Valencia. Realizamos mudanzas locales y nacionales. Contamos con un equipo de profesionales con más de 10 años de experiencia."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${figtree.className}`}>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
