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

  const nextReview = (current: number) => {
    return current === reviews.length - 1 ? 0 : current + 1
  }

  const prevReview = (current: number) => {
    return current === 0 ? reviews.length - 1 : current - 1
  }

  const handlePrev = () => {
    const reviewCardContainer = document.querySelector(
      `.${styles.reviewCard__container}`
    ) as HTMLElement
    reviewCardContainer.style.opacity = "0"
    setTimeout(() => {
      setCurrentReview(prevReview(currentReview))
      reviewCardContainer.style.opacity = "1"
    }, 200)
  }

  const handleNext = () => {
    const reviewCardContainer = document.querySelector(
      `.${styles.reviewCard__container}`
    ) as HTMLElement
    reviewCardContainer.style.opacity = "0"
    setTimeout(() => {
      setCurrentReview(nextReview(currentReview))
      reviewCardContainer.style.opacity = "1"
    }, 200)
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
        >
          {`<`}
        </button>

        <div className={styles.reviewCard__container}>
          <ReviewCard review={reviews[prevReview(currentReview)]} />
          <ReviewCard review={reviews[currentReview]} main />
          <ReviewCard review={reviews[nextReview(currentReview)]} />
        </div>

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
