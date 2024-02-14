import React from "react"

import styles from "./page.module.css"

import { services } from "@/data"
import Image from "next/image"

const Services = () => {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.intro}>
            <h1>Nuestros Servicios de Mudanza</h1>
            <p>
              En Mudanzas TColau, nos esforzamos por brindar un servicio
              completo y confiable para hacer que su experiencia de mudanza sea
              lo más fácil y libre de estrés posible. Nuestro equipo altamente
              capacitado está aquí para ayudarlo en cada paso del camino.
              Descubra nuestros servicios a continuación:
            </p>
          </div>
          <div className={styles.services}>
            {services.map((service) => (
              <div
                key={service.id}
                className={`${styles.service} ${
                  service.id % 2 === 0 ? styles.even : styles.odd
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={300}
                  className={styles.image}
                />
                <div className={styles.text}>
                  <h2>{service.title}</h2>
                  <p>{service.extended}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.outro}>
            <p>
              Estos son solo algunos de los servicios que ofrecemos en Mudanzas
              TColau. Sea cual sea su necesidad de mudanza, estamos aquí para
              ayudarlo. ¡Contáctenos hoy mismo para obtener más información y
              comenzar a planificar su mudanza sin estrés!
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
