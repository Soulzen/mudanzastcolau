import Image from "next/image"
import React from "react"

import styles from "./hero_section.module.css"
import CTA from "../cta/cta"

import hero_image from "@/../public/[portrait]Tcolau.png"

const HeroSection = () => {
  return (
    <section className={styles.hero__section}>
      <div className={styles.container}>
        <div className={styles.hero__content}>
          {/* <h1 className={styles.hero__title}>
            Experimente la diferencia con{" "}
            <span className={styles.hero__title_span}>Mudanzas TColau:</span>{" "}
            Mudanzas de calidad a un precio accesible
          </h1> */}
          <h1 className={styles.hero__title}>
            Mudanzas{" "}
            <span className={styles.hero__title_span}>profesionales</span> para
            su tranquilidad
          </h1>
          <p className={styles.hero__text}>
            Experimente una mudanza sin preocupaciones con nuestro servicio
            profesional y asequible. Confíe en nuestra experiencia y cuidado
            para una transición sin estrés a un precio que se ajusta a su
            presupuesto.
          </p>
          {/* <p className={styles.hero__text}>
            Simplifique su mudanza con Mudanzas TColau: Experiencia,
            confiabilidad y cuidado
          </p> */}
          {/* <a href="/" className={styles.hero__button}>
            Obtener presupuesto
          </a> */}
          <CTA text="OBTENER PRESUPUESTO" />
        </div>

        <Image
          className={styles.hero__image}
          src={hero_image}
          alt="man carrying boxes"
          sizes="(max-width: 900px) 100vw,  33vw"
          priority
        />
      </div>
    </section>
  )
}

export default HeroSection
