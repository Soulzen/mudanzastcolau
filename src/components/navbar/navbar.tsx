// components/NavBar.js

import Link from "next/link"

import styles from "./navbar.module.css"

type NavBarProps = {
  desktop?: boolean
}

const NavBar = ({ desktop }: NavBarProps) => {
  return (
    <nav
      className={`${styles.navbar} ${desktop ? styles.navbar__desktop : null}`}
    >
      <ul className={styles.navbar_nav}>
        <li className={styles.nav_item}>
          <Link href="/" className={styles.nav_link}>
            Inicio
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link href="#" className={styles.nav_link}>
            Servicios
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link href="/contacto" className={styles.nav_link}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
