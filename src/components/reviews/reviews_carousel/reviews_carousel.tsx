"use client"

import React, { useState } from "react"

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

  const nextReview = (current: number) => {
    return current === reviews.length - 1 ? 0 : current + 1
  }

  const prevReview = (current: number) => {
    return current === 0 ? reviews.length - 1 : current - 1
  }

  const handlePrev = () => {
    setCurrentReview(prevReview)
  }

  const handleNext = () => {
    setCurrentReview(nextReview)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNext()
    } else if (touchStart - touchEnd < -50) {
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
          aria-label="Reseña anterior"
        >
          ‹
        </button>

        <div className={styles.review__viewport}>
          <div
            className={styles.reviewCard__container}
            style={{
              transform: `translateX(calc(var(--center-offset) - ${currentReview} * var(--slide-step)))`
            }}
          >
            {reviews.map((review, index) => (
              <ReviewCard
                key={review.id}
                review={review}
                main={index === currentReview}
              />
            ))}
          </div>
        </div>

        <button
          className={`${styles.review__button} ${styles.review__button_next}`}
          onClick={handleNext}
          aria-label="Siguiente reseña"
        >
          ›
        </button>
      </div>
      <div className={styles.pagination}>
        {reviews.map((review, index) => (
          <button
            key={review.id}
            aria-label={`Ver reseña ${index + 1}`}
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
