import React from "react"

import styles from "./reviews.module.css"
import Carousel from "./reviews_carousel/reviews_carousel"

import googleReviews from "@/../public/social_proof/google_reviews.png"

import { reviews } from "@/data"
import Link from "next/link"
import Image from "next/image"

const Reviews = () => {
  return (
    <section className={styles.reviews__section}>
      <div className={styles.reviews__container}>
        <h2 className={styles.reviews__title}>
          ¿Qué opinan nuestros clientes?
        </h2>
        <Carousel reviews={reviews} />
        <div className={styles.reviews__google}>
          <p className={styles.reviews__source}>
            Reseñas de clientes verificadas en{" "}
            {/* <span className={styles.reviews__source__link}>
              <Link
                className={styles.reviews__source__link}
                href="https://www.google.com/search?hl=es-ES&rlz=1C1GCEA_enES979ES979&cs=0&q=Mudanzas%20Tcolau%20Rese%C3%B1as&ludocid=6799990411408612184&ibp=gwp%3B0%2C7&sa=X&ved=0CBwQ9fQKKABqFwoTCJCx7oXrmoQDFQAAAAAdAAAAABAF#lkt=LocalPoiReviews&lpg=cid:CgIgAQ%3D%3D"
              >
                Google
              </Link>
            </span> */}
          </p>
          <Link
            className={styles.reviews__source__link}
            href="https://www.google.com/search?hl=es-ES&rlz=1C1GCEA_enES979ES979&cs=0&q=Mudanzas%20Tcolau%20Rese%C3%B1as&ludocid=6799990411408612184&ibp=gwp%3B0%2C7&sa=X&ved=0CBwQ9fQKKABqFwoTCJCx7oXrmoQDFQAAAAAdAAAAABAF#lkt=LocalPoiReviews&lpg=cid:CgIgAQ%3D%3D"
          >
            <Image
              src={googleReviews}
              alt="Google Reviews image"
              className={styles.googleReviews__image}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Reviews
