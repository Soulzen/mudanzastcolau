import Image from "next/image"
import React from "react"

import styles from "./presentation.module.css"
import carrying_furniture from "@/../public/presentation_images/carrying_furniture.png"
import full_van from "@/../public/presentation_images/full_van.png"
import lift_truck from "@/../public/presentation_images/lift_truck.png"

const Presentation = () => {
  return (
    <section className={styles.presentation__section}>
      <div className={styles.container}>
        <div className={styles.presentation__content}>
          <h2 className={styles.presentation__title}>
            Hola, somos{" "}
            <span className={styles.presentation__title_span}>
              Mudanzas TColau
            </span>
          </h2>
          <p className={styles.presentation__text}>
            Con más de una decada en el sector del transporte, MudanzasTcolau se
            erige como un símbolo de estabilidad y experiencia. En el complejo
            campo de las mudanzas, la profesionalidad, dedicación y atención
            personalizada son esenciales. Nuestros clientes confían en que
            tratamos sus pertenencias con cuidado y responsabilidad.
          </p>
          <p className={styles.presentation__text}>
            La lealtad de nuestros clientes se ha forjado a lo largo del tiempo
            gracias a nuestro compromiso con un servicio de calidad, respaldando
            nuestra sólida reputación en el sector. En MudanzasTcolau, no solo
            transportamos objetos; somos guardianes de recuerdos, asegurando que
            cada artículo y memoria se traslade con respeto. Somos arquitectos
            de transiciones fluidas y guardianes celosos de la confianza de
            nuestros clientes. En cada kilómetro, perseveramos con un compromiso
            inquebrantable de cumplir una promesa. MudanzasTcolau, donde
            experiencia y dedicación convergen para ofrecer un servicio
            excepcional.
          </p>
        </div>
        <div className={styles.image__container}>
          <div className={styles.first__row}>
            <Image
              className={styles.presentation__image_portrait}
              alt="Two men carrying furniture"
              src={carrying_furniture}
              sizes="(max-width: 900px) 50vw, 30vw"
            />
            <Image
              className={styles.presentation__image_portrait}
              alt="Full van"
              src={full_van}
              sizes="(max-width: 900px) 50vw, 30vw"
            />
          </div>
          <Image
            className={styles.presentation__image_landscape}
            alt="A lift truck"
            src={lift_truck}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}

export default Presentation
