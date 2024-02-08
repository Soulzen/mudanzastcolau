"use client"

import React, { useState } from "react"
import Image from "next/image"

import styles from "./reviews_carousel.module.css"

import { Review } from "../../../data"
import ReviewCard from "../review_card/review_card"

interface CarouselProps {
  reviews: Review[]
}

const Carousel = ({ reviews }: CarouselProps) => {
  const [currentReview, setCurrentReview] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

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

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      handleNext()
    }

    if (touchStart - touchEnd < -100) {
      handlePrev()
    }
  }

  return (
    <div className={styles.review__content}>
      <div
        className={styles.review__carousel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
      <div className={styles.pagination}>
        {reviews.map((review, index) => (
          <button
            key={index}
            className={`${styles.pagination__button} ${
              index === currentReview ? styles.pagination__button_active : ""
            }`}
            onClick={() => setCurrentReview(index)}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Carousel
