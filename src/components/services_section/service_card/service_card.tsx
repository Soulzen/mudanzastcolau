import Image from "next/image"
import React from "react"

import styles from "./service_card.module.css"
import { Service } from "../../../data"

interface PropsServiceCard {
  service: Service
}

const ServiceCard = ({ service }: PropsServiceCard) => {
  return (
    <div className={styles.service__card}>
      <Image
        className={styles.service__image}
        src={service.image}
        alt={service.title}
        width={150}
        height={150}
      />
      <div className={styles.service__content}>
        <h3 className={styles.service__title}>{service.title}</h3>
        <p className={styles.service__text}>{service.description}</p>
      </div>
    </div>
  )
}

export default ServiceCard
