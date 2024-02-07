import React, { useState } from "react"
import Image from "next/image"

import styles from "./review_card.module.css"
import { Review } from "@/data"

interface CarouselProps {
  review: Review
}

const ReviewCard = ({ review }: CarouselProps) => {
  return (
    <div className={styles.review__card}>
      <Image
        className={styles.review__image}
        src={review.image}
        alt={review.name}
        width={70}
        height={70}
      />
      <h3 className={styles.review__name}>{review.name}</h3>
      <div className={styles.review__rating}>
        {Array.from({ length: review.rating }).map((_, index) => (
          <span key={index}>⭐</span>
        ))}
      </div>
      <p className={styles.review__text}>{review.text}</p>
    </div>
  )
}

export default ReviewCard
