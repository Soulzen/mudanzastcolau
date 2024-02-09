import Image from "next/image"
import styles from "./page.module.css"
import HeroSection from "@/components/hero_section/hero_section"
import Presentation from "@/components/presentation/presentation"
import Services from "@/components/services_section/services"
import Reviews from "@/components/reviews/reviews"
import WhyUs from "@/components/why_us/why_us"
import Footer from "@/components/footer/footer"
import Conclusion from "@/components/conclusion/conclusion"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Presentation />
      <Services />
      <Reviews />
      <WhyUs />
      <Conclusion />
    </main>
  )
}
