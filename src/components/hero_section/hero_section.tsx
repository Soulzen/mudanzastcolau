import Image from "next/image"
import React from "react"

import styles from "./hero_section.module.css"

import { hero } from "@/data"

const HeroSection = () => {
  return (
    <section className={styles.hero__section}>
      <div className={styles.container}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>{hero.title}</h1>
          <p className={styles.hero__text}>{hero.subtitle}</p>
          <a href="/" className={styles.hero__button}>
            {hero.button}
          </a>
        </div>

        <Image
          className={styles.hero__image}
          src="/[portrait]moving-van.jpg"
          alt="man carrying boxes"
          width={350}
          height={615}
          priority
        />
      </div>
    </section>
  )
}

export default HeroSection
