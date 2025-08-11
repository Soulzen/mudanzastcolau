"use client"

import React from "react"
import styles from "./whatsapp.module.css"
import WhatsAppIcon from "@/icons/Whatsapp"

const WhatsApp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=34613196340"
      className={styles.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className={styles.icon} />
    </a>
  )
}

export default WhatsApp
