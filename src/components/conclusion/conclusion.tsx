import React from "react"

import styles from "./conclusion.module.css"
import CTA from "../cta/cta"

const Conclusion = () => {
  return (
    <section className={styles.conclusion__section}>
      <div className={styles.conclusion__container}>
        <h2 className={styles.conclusion__title}>
          ¡Confía en Mudanzas Tcolau para tu próxima mudanza!
        </h2>
        <p className={styles.conclusion__text}>
          Con más de una década de experiencia, te ofrecemos un servicio
          profesional y personalizado para que tu mudanza sea sin estrés y llena
          de confianza.
        </p>
        <p
          className={`${styles.conclusion__text} ${styles.conclusion__text_bold}`}
        >
          ¡Contáctanos hoy mismo para obtener un presupuesto personalizado!
        </p>

        <CTA text="¡Obtener Presupuesto Gratis!" dark />
      </div>
    </section>
  )
}

export default Conclusion
