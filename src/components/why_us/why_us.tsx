import React from "react"
import styles from "./why_us.module.css"

import { benefits } from "@/data"

const WhyUs = () => {
  return (
    <section className={styles.whyUs__section}>
      <div className={styles.whyUs__container}>
        <h2 className={styles.whyUs__title}>
          ¿Por qué deberías trabajar con nosotros?
        </h2>
        <div className={styles.whyUs__content}>
          {benefits.map((benefit) => (
            <div key={benefit.id} className={styles.whyUs__card}>
              <h3 className={styles.benefit__title}>{benefit.title}</h3>
              <p className={styles.benefit__text}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
