"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

import styles from "./header.module.css"
import NavBar from "../navbar/navbar"
import TruckIcon from "../../icons/TruckIcon"
import PhoneIcon from "@/icons/PhoneIcon"
import Image from "next/image"

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <TruckIcon className={styles.logo} />
          <h1 className={styles.heading}>Mudanzas TColau</h1>
        </Link>
        <NavBar desktop />
        <a
          href="https://api.whatsapp.com/send?phone=34613196340"
          className={styles.telefono}
        >
          <Image
            src="/social_media/whatsapp_logo.svg"
            alt="whatsapp"
            width={25}
            height={25}
          />
          <p>+34 613196340</p>
        </a>
        <button className={styles.nav_menu} onClick={handleMobileMenuToggle}>
          ☰
        </button>
      </div>
      {isMobileMenuOpen && <NavBar />}
    </header>
  )
}
