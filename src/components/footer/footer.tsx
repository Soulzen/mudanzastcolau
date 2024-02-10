import React from "react"
import styles from "./footer.module.css"
import TruckIcon from "@/icons/TruckIcon"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.subsection}>
          <h3 className={styles.heading}>
            <TruckIcon className={styles.icon} />
            Mudanzas TColau
          </h3>
          <p className={styles.text}>
            © 2024 MudanzasTcolau. Todos los derechos reservados.
          </p>

          <p className={styles.text}>
            Dirección: Carrer Guillermo Roch, 63-57 46185 La Pobla de Vallbona,
            Valencia
          </p>

          <p className={styles.text}>Teléfono: 627749549</p>

          <p className={styles.text}>
            Correo electrónico: tcolau@tcolaumudanzas.com
          </p>

          <p className={styles.text}>Síguenos en: [Enlaces a redes sociales]</p>
        </div>
        <div className={styles.subsection}>
          <h3 className={styles.heading}>Enlaces</h3>
          <ul className={styles.list}>
            <li>
              <a className={styles.link} href="/">
                Inicio
              </a>
            </li>
            <li>
              <a className={styles.link} href="/servicios">
                Servicios
              </a>
            </li>
            <li>
              <a className={styles.link} href="/contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
