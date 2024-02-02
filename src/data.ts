export interface Hero {
  title: string
  subtitle: string
  button: string
}

export interface Benefit {
  title: string
  description: string
}

export const hero: Hero = {
  title: "Mudanzas Profesionales para tu Tranquilidad",
  subtitle:
    "Simplifica tu mudanza con Transportes TColau: Experiencia, confiabilidad y cuidado",
  button: "Obtener presupuesto"
}

export const benefits: Benefit[] = [
  {
    title: "Servicio de Mudanza sin Estrés",
    description:
      "Equipo profesional que gestiona todos los aspectos de la mudanza, liberando a los clientes de la carga logística y del trabajo pesado."
  },
  {
    title: "Eficiencia en Mudanzas Comerciales",
    description:
      "Especialización en mudanzas comerciales, garantizando una transición fluida y mínima interrupción para las operaciones comerciales."
  },
  {
    title: "Materiales de Embalaje Ecológicos",
    description:
      "Ofrecemos opciones de embalaje ecológicas, reduciendo los residuos y fomentando prácticas de mudanza sostenibles."
  },
  {
    title: "Soluciones de Almacenamiento Seguro",
    description:
      "Almacenamiento temporal o a largo plazo para brindar seguridad a los artículos durante la mudanza."
  },
  {
    title: "Flota de Vehículos Moderna",
    description:
      "Camiones de mudanza equipados con tecnología avanzada para garantizar la seguridad y la puntualidad en la entrega."
  },
  {
    title: "Cotización Personalizada Gratuita",
    description:
      "Ofrecemos presupuestos personalizados gratuitos para adaptarnos a las necesidades específicas de cada cliente."
  },
  {
    title: "Conciencia Ambiental",
    description:
      "Enfoque en prácticas de mudanza ecológicas, minimizando la huella de carbono para aquellos que buscan opciones sostenibles."
  },
  {
    title: "Experiencia Confiable",
    description:
      "Historial probado de mudanzas exitosas respaldado por testimonios de clientes satisfechos."
  },
  {
    title: "Atención al Cliente de Calidad",
    description:
      "Servicio al cliente dedicado para abordar preguntas y preocupaciones en todas las etapas del proceso de mudanza."
  },
  {
    title: "Transparencia y Honestidad",
    description:
      "Comunicación clara sobre costos, tiempos y procesos para construir confianza con nuestros clientes."
  },
  {
    title: "Seguro de Mudanza Opcional",
    description:
      "Opción para adquirir un seguro de mudanza que brinda tranquilidad adicional durante el proceso."
  }
]
