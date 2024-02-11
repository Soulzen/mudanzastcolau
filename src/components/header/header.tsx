"use client"

import React, { useState } from "react"
import styles from "./header.module.css"
import NavBar from "../navbar/navbar"
import TruckIcon from "../../icons/TruckIcon"

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <TruckIcon className={styles.logo} />
          <h1 className={styles.heading}>Mudanzas TColau</h1>
        </div>
        <NavBar desktop />
        <button className={styles.nav_menu} onClick={handleMobileMenuToggle}>
          ☰
        </button>
      </div>
      {isMobileMenuOpen && <NavBar />}
    </header>
  )
}
