"use client"

import React, { useState } from "react"

import styles from "./cta.module.css"

interface CTAProps {
  text: string
  dark?: boolean
}

const CTA = ({ text, dark }: CTAProps) => {
  const [label, setLabel] = useState(text)
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
    setLabel(toggle ? text : "6 2 7 7 4 9 5 4 9")
  }

  return (
    <a
      href="tel:627749549"
      className={`${styles.cta} ${dark ? styles.cta_dark : null}`}
      // onClick={handleClick}
    >
      {toggle ? <PhoneIcon className={styles.icon} /> : null}
      {label}
    </a>
  )
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  )
}
export default CTA
