import React from "react"
import ServiceCard from "./service_card/service_card"

import styles from "./services.module.css"
import { services } from "../../data"

const Services = () => {
  return (
    <section className={styles.services__section}>
      <div className={styles.services__container}>
        <h2 className={styles.services__title}>Nuestros servicios</h2>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}

export default Services
