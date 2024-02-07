export interface Benefit {
  title: string
  description: string
}

export const benefits: Benefit[] = [
  // ...existing code...
]

export interface Service {
  id: number
  title: string
  description: string
  image: string
}

export const services: Service[] = [
  {
    id: 1,
    title: "Inventario",
    description:
      "Nuestro servicio de inventario asegura la documentación y seguimiento preciso de sus pertenencias durante la mudanza, brindando tranquilidad sobre su llegada segura.",
    image: "/services_images/inventory.jpg"
  },
  {
    id: 2,
    title: "Embalaje",
    description:
      "Ofrecemos servicios de embalaje profesional para garantizar la seguridad de sus pertenencias durante el transporte, utilizando materiales de embalaje ecológicos.",
    image: "/services_images/packing.jpg"
  },
  {
    id: 3,
    title: "Desmontaje y Montaje",
    description:
      "Nuestro equipo se encarga del desmontaje y montaje de muebles, asegurando que sus pertenencias lleguen a su destino en perfectas condiciones.",
    image: "/services_images/assembly.jpg"
  },
  {
    id: 4,
    title: "Montacargas",
    description:
      "Contamos con montacargas para facilitar el transporte de artículos pesados y voluminosos, garantizando la seguridad y eficiencia durante el proceso de mudanza.",
    image: "/services_images/lift_truck.png"
  },
  {
    id: 5,
    title: "Almacenamiento",
    description:
      "Ofrecemos soluciones de almacenamiento seguro para sus pertenencias, ya sea a corto o largo plazo, brindando tranquilidad durante el proceso de mudanza.",
    image: "/services_images/storage.jpg"
  },
  {
    id: 6,
    title: "Artículos Frágiles",
    description:
      "Nuestro equipo se especializa en el transporte de artículos frágiles, asegurando que lleguen a su destino en perfectas condiciones.",
    image: "/services_images/fragile.jpg"
  }
]
