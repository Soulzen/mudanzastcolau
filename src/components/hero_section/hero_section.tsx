import Image from "next/image"
import React from "react"
import styles from "./hero_section.module.css"

const HeroSection = () => {
  return (
    <section className={styles.hero__section}>
      <div className={styles.container}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>
            Mudanzas Eficientes para tu Tranquilidad
          </h1>
          <p className={styles.hero__text}>
            Simplifica tu mudanza con Transportes TColau: Experiencia,
            confiabilidad y cuidado
          </p>
          <a href="#" className={styles.hero__button}>
            Obtener presupuesto
          </a>
        </div>

        <Image
          className={styles.hero__image}
          src="/hero.jpg"
          alt="man carrying boxes"
          width={615}
          height={350}
          priority
        />
      </div>
    </section>
  )
}

export default HeroSection
