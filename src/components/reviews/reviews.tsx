import React from "react"

import styles from "./reviews.module.css"
// import Carousel from "./carousel/carousel"

import { reviews } from "@/data"

const Reviews = () => {
  return (
    <section className={styles.reviews__section}>
      <h2>Reviews</h2>
      {/* <Carousel reviews={reviews} /> */}
    </section>
  )
}

export default Reviews
