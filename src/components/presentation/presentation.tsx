import Image from "next/image"
import React from "react"

import styles from "./presentation.module.css"

const Presentation = () => {
  return (
    <section className={styles.presentation__section}>
      <div className={styles.container}>
        <Image
          className={styles.presentation__image}
          src="/[landscape]inventary-check.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />

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
      </div>
    </section>
  )
}

export default Presentation
