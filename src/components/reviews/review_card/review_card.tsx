import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"

import styles from "./review_card.module.css"
import { Review } from "@/data"

interface CarouselProps {
  review: Review
}

const ReviewCard = ({ review }: CarouselProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isTooLong, setIsTooLong] = useState(false)

  const paragraphRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (
      paragraphRef.current &&
      paragraphRef.current.textContent &&
      paragraphRef.current.textContent.length > 150
    ) {
      setIsTooLong(true)
    } else {
      setIsTooLong(false)
    }
    setIsExpanded(false)
  }, [review])

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
      <p
        ref={paragraphRef}
        className={`${styles.review__text} ${
          !isExpanded ? styles.collapsed : null
        }`}
      >
        {review.text}
      </p>
      {isExpanded ? (
        <button className={styles.button} onClick={() => setIsExpanded(false)}>
          Ver menos
        </button>
      ) : isTooLong ? (
        <button className={styles.button} onClick={() => setIsExpanded(true)}>
          Seguir leyendo...
        </button>
      ) : null}
    </div>
  )
}

export default ReviewCard
