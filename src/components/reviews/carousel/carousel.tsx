"use client"

import React, { useState } from "react"
import Image from "next/image"

import styles from "./carousel.module.css"

import { Review } from "../../../data"

interface CarouselProps {
  reviews: Review[]
}

const Carousel = ({ reviews }: CarouselProps) => {
  const [currentReview, setCurrentReview] = useState(0)

  const handlePrev = () => {
    setCurrentReview((prevReview) =>
      prevReview === 0 ? reviews.length - 1 : prevReview - 1
    )
  }

  const handleNext = () => {
    setCurrentReview((prevReview) =>
      prevReview === reviews.length - 1 ? 0 : prevReview + 1
    )
  }

  return (
    <div className={styles.review__carousel}>
      <button
        className={`${styles.review__button} ${styles.review__button_prev}`}
        onClick={handlePrev}
      >
        {`<`}
      </button>
      <div className={styles.review__card}>
        <Image
          className={styles.review__image}
          src={reviews[currentReview].image}
          alt={reviews[currentReview].name}
          width={70}
          height={70}
        />
        <h3 className={styles.review__name}>{reviews[currentReview].name}</h3>
        <div className={styles.review__rating}>
          {Array.from({ length: reviews[currentReview].rating }).map(
            (_, index) => (
              <span key={index}>⭐</span>
            )
          )}
        </div>
        <p className={styles.review__text}>{reviews[currentReview].text}</p>
      </div>

      <button
        className={`${styles.review__button} ${styles.review__button_next}`}
        onClick={handleNext}
      >
        {`>`}
      </button>
    </div>
  )
}

export default Carousel
