"use client"

import React from "react"
import { useForm, ValidationError } from "@formspree/react"

import styles from "./contact_form.module.css"

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xdoqgary")
  if (state.succeeded) {
    return (
      <div className={styles.submited}>
        <h2 className={styles.thank_text}>¡Gracias por su mensaje!</h2>
      </div>
    )
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Mandanos un mensaje</h2>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">
          Nombre
        </label>
        <input
          className={styles.input}
          id="name"
          type="text"
          name="name"
          placeholder="Escribe tu nombre completo"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          E-mail
        </label>
        <input
          className={styles.input}
          id="email"
          type="email"
          name="email"
          placeholder="Escribe tu correo electrónico"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="phone">
          Teléfono
        </label>
        <input
          className={styles.input}
          id="phone"
          type="number"
          name="phone"
          placeholder="Escribe tu número de teléfono"
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          Mensaje
        </label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          rows={6}
          placeholder="Escribenos tu mensaje"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        className={styles.button}
        type="submit"
        disabled={state.submitting}
      >
        Enviar
      </button>
    </form>
  )
}
