import inventory_image from "@/../public/services_images/inventory.jpg"
import packing_image from "@/../public/services_images/packing.jpg"
import assembly_image from "@/../public/services_images/assembly.jpg"
import lift_truck_image from "@/../public/services_images/lift_truck.png"
import storage_image from "@/../public/services_images/storage.jpg"
import fragile_image from "@/../public/services_images/fragile.jpg"
import { StaticImageData } from "next/image"

export interface Benefit {
  id: number
  title: string
  description: string
}

export const benefits: Benefit[] = [
  {
    id: 1,
    title: "Servicio de Mudanza sin Estrés",
    description:
      "Equipo profesional que gestiona todos los aspectos de la mudanza, liberando a los clientes de la carga logística y del trabajo pesado."
  },
  {
    id: 2,
    title: "Eficiencia en Mudanzas Comerciales",
    description:
      "Especialización en mudanzas comerciales, garantizando una transición fluida y mínima interrupción para las operaciones comerciales."
  },
  // {
  //   id: 3,
  //   title: "Materiales de Embalaje Ecológicos",
  //   description:
  //     "Ofrecemos opciones de embalaje ecológicas, reduciendo los residuos y fomentando prácticas de mudanza sostenibles."
  // },
  {
    id: 4,
    title: "Soluciones de Almacenamiento Seguro",
    description:
      "Almacenamiento temporal o a largo plazo para brindar seguridad a los artículos durante la mudanza."
  },
  {
    id: 5,
    title: "Flota de Vehículos Moderna",
    description:
      "Camiones de mudanza equipados con tecnología avanzada para garantizar la seguridad y la puntualidad en la entrega."
  },
  {
    id: 6,
    title: "Cotización Personalizada Gratuita",
    description:
      "Ofrecemos presupuestos personalizados gratuitos para adaptarnos a las necesidades específicas de cada cliente."
  },
  // {
  //   id: 7,
  //   title: "Conciencia Ambiental",
  //   description:
  //     "Enfoque en prácticas de mudanza ecológicas, minimizando la huella de carbono para aquellos que buscan opciones sostenibles."
  // },
  {
    id: 8,
    title: "Experiencia Confiable",
    description:
      "Historial probado de mudanzas exitosas respaldado por testimonios de clientes satisfechos."
  },
  {
    id: 9,
    title: "Atención al Cliente de Calidad",
    description:
      "Servicio al cliente dedicado para abordar preguntas y preocupaciones en todas las etapas del proceso de mudanza."
  },
  {
    id: 10,
    title: "Transparencia y Honestidad",
    description:
      "Comunicación clara sobre costos, tiempos y procesos para construir confianza con nuestros clientes."
  },
  {
    id: 11,
    title: "Seguro de Mudanza Opcional",
    description:
      "Opción para adquirir un seguro de mudanza que brinda tranquilidad adicional durante el proceso."
  }
]

export interface Service {
  id: number
  title: string
  description: string
  extended: string
  image: StaticImageData
}

export const services: Service[] = [
  {
    id: 1,
    title: "Inventario",
    description:
      "Nuestro servicio de inventario asegura la documentación y seguimiento preciso de sus pertenencias durante la mudanza, brindando tranquilidad sobre su llegada segura.",
    extended:
      "En Mudanzas TColau entendemos la importancia de cada uno de sus objetos personales. Nuestro servicio de inventario no solo documenta meticulosamente cada artículo, sino que también proporciona un seguimiento detallado durante todo el proceso de mudanza. Con nosotros, puede estar seguro de que sus pertenencias llegarán a su destino de manera segura y sin contratiempos.",
    image: inventory_image
  },
  {
    id: 2,
    title: "Embalaje",
    description:
      "Ofrecemos servicios de embalaje profesional para garantizar la seguridad de sus pertenencias durante el transporte, utilizando materiales de embalaje ecológicos.",
    extended:
      "Confíe en nuestro equipo experto para embalar sus pertenencias con el máximo cuidado y atención al detalle. Utilizamos materiales de embalaje ecológicos de la más alta calidad para garantizar la seguridad de sus artículos durante el transporte. Con Mudanzas TColau, puede tener la tranquilidad de saber que sus objetos más preciados están en buenas manos.",
    image: packing_image
  },
  {
    id: 3,
    title: "Desmontaje y Montaje",
    description:
      "Nuestro equipo se encarga del desmontaje y montaje de muebles, asegurando que sus pertenencias lleguen a su destino en perfectas condiciones.",
    extended:
      "Nuestro equipo está capacitado para manejar el desmontaje y montaje de muebles de manera eficiente y profesional. Ya sea un sofá, una cama o una mesa, nos encargamos de cada pieza con el máximo cuidado y atención. Con Mudanzas TColau, puede estar seguro de que sus muebles llegarán a su destino en perfectas condiciones, listos para ser instalados sin problemas.",
    image: assembly_image
  },
  {
    id: 4,
    title: "Montacargas",
    description:
      "Contamos con montacargas para facilitar el transporte de artículos pesados y voluminosos, garantizando la seguridad y eficiencia durante el proceso de mudanza.",
    extended:
      "Para artículos pesados y voluminosos, contamos con montacargas especializados para garantizar un transporte seguro y eficiente. Nuestro equipo experto maneja estos equipos con habilidad y precaución, asegurando que sus pertenencias lleguen a su destino sin daños ni contratiempos. En Mudanzas TColau, su seguridad y satisfacción son nuestra máxima prioridad.",
    image: lift_truck_image
  },
  {
    id: 5,
    title: "Almacenamiento",
    description:
      "Ofrecemos soluciones de almacenamiento seguro para sus pertenencias, ya sea a corto o largo plazo, brindando tranquilidad durante el proceso de mudanza.",
    extended:
      "¿Necesita almacenamiento seguro para sus pertenencias durante un período de tiempo determinado? En Mudanzas TColau, ofrecemos soluciones de almacenamiento flexibles, tanto a corto como a largo plazo. Con instalaciones seguras y bien cuidadas, puede confiar en nosotros para proteger sus objetos mientras espera el momento adecuado para su entrega.",
    image: storage_image
  },
  {
    id: 6,
    title: "Artículos Frágiles",
    description:
      "Nuestro equipo se especializa en el transporte de artículos frágiles, asegurando que lleguen a su destino en perfectas condiciones.",
    extended:
      "Entendemos la importancia de sus artículos frágiles y delicados. Nuestro equipo altamente capacitado se especializa en el transporte de estos objetos, asegurando que lleguen a su destino en perfectas condiciones. Con Mudanzas TColau, puede confiar en nosotros para manejar sus artículos más preciados con el máximo cuidado y atención.",
    image: fragile_image
  }
]

export interface Review {
  id: number
  image: string
  name: string
  rating: number
  text: string
}

export const reviews: Review[] = [
  {
    id: 0,
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocIMP7c_6lOTmJurTi3wJRlMOHtSSQNoSuMW9eAdvum8=w500-h500-p-rp-mo-br100",
    name: "Anita 1974",
    rating: 5,
    text: "Toni y su equipo nos ayudaron con nuestra mudanza hace unos días. La verdad es que se alargo un poco más de la cuenta debido al volumen de enseres que teníamos, pero no perdieron la sonrisa, fueron amables en todo momento y la acabaron el mismo dia. Todo ha llegado en perfecto estado porque son muy respetuosos y cuidasosos. Totalmente recomendable 👌🏼"
  },
  {
    id: 1,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXaV9N3mBaFiS3PrKDPQ2DpkehFTY5XK3DNk9PPLKbawDA=w500-h500-p-rp-mo-br100",
    name: "Jonathan Bermúdez",
    rating: 5,
    text: "Super amables y profesionales, precio económico. Hacen muy bien su trabajo y estuve muy satisfecho con el servicio."
  },
  {
    id: 2,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjU0yDA3LjHy1xLqBMuE6wWtFNP9uCe8CK90aI_TQWMqEg=w500-h500-p-rp-mo-br100",
    name: "cristina cubells",
    rating: 5,
    text: "Una mudanza grande,los chicos muy amables y puntuales, desmontar muebles y montar, el transporte según lo acordado , todo se ha trasladado con cuidado y ha llegado en perfecto estado. La atención de Toni genial."
  },
  {
    id: 3,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjX5-dRD0I-DSp7QVvWUhbW0odfJJZ_JCgliYCQMXwXDWNA=w500-h500-p-rp-mo-ba6-br100",
    name: "Eloy",
    rating: 5,
    text: "Una mudanza excelente con Toni. Se pegaron una buena currada moviendo todas las cajas y muebles. Hicieron dos viajes para poder terminarla en el mismo día ya que no entro todo en uno solo. Son muy profesionales, atentos, serios y fueron cuidadosos con todo, ya que no se rompió nada en el traslado y eso que había cosas de cristal. Que decir del precio de lo mejor que vas a encontrar en valencia. Los recomiendo totalmente y volvería a contratarlos sin duda."
  },
  {
    id: 4,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVS19sOTwZ-SynUy-pam8sdiSgO5vcqScTocwPh000gLf0=w500-h500-p-rp-mo-br100",
    name: "Elena Tamarit",
    rating: 5,
    text: "Puntualidad, profesionalidad y simpatía a tope! Toni y Alberto nos trataron genial, para recomendar 🙂…"
  },
  {
    id: 5,
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocK8boQM-QbB_Uqx-gPF5dvEOHPhJt70WHD4NJFCWqwt=w500-h500-p-rp-mo-br100",
    name: "Mauricio Arenas",
    rating: 5,
    text: "Antoni fue súper amable, siempre dispuesto y me ayudó muchísimo. Encima es muy majo y no dice que no a nada! Lo recomiendo mucho."
  },
  {
    id: 6,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjUgTGOW2q7AlgA7WCke9QwwH4gvz6Y-BKIbQXvcAvJ6x5g=w500-h500-p-rp-mo-br100",
    name: "Tania Raga Leal",
    rating: 5,
    text: "La verdad que muy rápidos y eficientes. Volvería a contratarlos en caso de otra mudanza"
  }
]
