import React from "react"
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.footer__title}>Just scratching the surface</h2>
        <div className={`${styles.row} ${styles.footer__content}`}>
          <div className={styles.footer__about}>
            <div className={`${styles.col} ${styles.footer__col}`}>
              <h4 className={styles.footer__subtitle}>About our company</h4>
              <p className={styles.footer__text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={`${styles.col} ${styles.footer__col}`}>
              <h4 className={styles.footer__subtitle}>Getting around</h4>
              <ul className={styles.footer__list}>
                <li className={styles.footer__item}>
                  <a className={styles.footer__link} href="#">
                    Home
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a className={styles.footer__link} href="#">
                    About
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a className={styles.footer__link} href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${styles.col} ${styles.footer__col}`}>
              <h4 className={styles.footer__subtitle}>Other things</h4>
              <ul className={styles.footer__list}>
                <li className={styles.footer__item}>
                  <a className={styles.footer__link} href="#">
                    Lorem ipsum
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a className={styles.footer__link} href="#">
                    dolor
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a className={styles.footer__link} href="#">
                    sit amet
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a className={styles.footer__link} href="#">
                    consectetur
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${styles.col} ${styles.footer__col}`}>
              <h4 className={styles.footer__subtitle}>And more</h4>
              <ul className={styles.footer__list}>
                <li className={styles.footer__item}>
                  <a className={styles.footer__link} href="#">
                    Lorem ipsum
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a className={styles.footer__link} href="#">
                    dolor
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a className={styles.footer__link} href="#">
                    sit amet
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a className={styles.footer__link} href="#">
                    consectetur
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
