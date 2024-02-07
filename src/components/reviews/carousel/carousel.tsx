"use client"

import React, { useState } from "react"
import Image from "next/image"

import styles from "./carousel.module.css"

import { Review } from "../../../data"
import ReviewCard from "../review_card/review_card"

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

      <ReviewCard review={reviews[currentReview]} />

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
