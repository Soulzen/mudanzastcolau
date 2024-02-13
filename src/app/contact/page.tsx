import React from "react"

import styles from "./page.module.css"
import MailIcon from "@/icons/MailIcon"
import LocationIcon from "@/icons/LocationIcon"
import PhoneIcon from "@/icons/PhoneIcon"
import GoogleMaps from "@/components/google_map/google_map"
import ContactForn from "@/components/contact_form/contact_form"

const Contact = () => {
  return (
    <main>
      <section className={styles.main__section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.content__info}>
              <div className={styles.content__info__intro}>
                <h1 className={styles.content__info__intro__title}>
                  ¿Cómo te podemos ayudar?
                </h1>
                <p className={styles.content__info__intro__text}>
                  Si tienes alguna pregunta, no dudes en contactarnos.
                </p>
              </div>
              <div className={styles.content__info__contact}>
                <h2 className={styles.content__info__contact__title}>
                  Información de contacto
                </h2>
                <ul>
                  <li>
                    <a
                      href="mailto:tcolau@mudanzastcolau.com"
                      className={styles.link}
                    >
                      <MailIcon className={styles.icon} />
                      tcolau@mudanzastcolau.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+34627749546" className={styles.link}>
                      <PhoneIcon className={styles.icon} />
                      +34 627749546
                    </a>
                  </li>
                  <li>
                    <p className={styles.link}>
                      <LocationIcon className={styles.icon} />
                      Carrer Guillermo Roch, 63-57 <br /> 46185 La Pobla de
                      Vallbona <br /> Valencia
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.content__map}>
              <GoogleMaps />
            </div>
          </div>
          <div className={styles.content__form}>
            <ContactForn />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
