import Image from "next/image"
import styles from "./page.module.css"
import HeroSection from "@/components/hero_section/hero_section"
import Presentation from "@/components/presentation/presentation"
import Services from "@/components/services_section/services"
import Reviews from "@/components/reviews/reviews"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Presentation />
      <Services />
      <Reviews />
    </main>
  )
}
