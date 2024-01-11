// components/NavBar.js

import Link from "next/link"

import styles from "./navbar.module.css"

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_nav}>
        <li className={styles.nav_item}>
          <Link href="#" className={styles.nav_link}>
            Home
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link href="#" className={styles.nav_link}>
            Services
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link href="#" className={styles.nav_link}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
