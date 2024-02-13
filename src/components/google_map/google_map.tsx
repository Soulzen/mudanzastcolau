import React, { useState } from "react"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"

import styles from "./google_map.module.css"

// const containerStyle = {
//   width: "400px",
//   height: "400px"
// }

// const center = {
//   lat: -3.745,
//   lng: -38.523
// }

function GoogleMaps() {
  //   const { isLoaded } = useJsApiLoader({
  //     id: "google-map-script",
  //     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string
  //   })

  return (
    //    isLoaded ? (
    //     <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
    //       {/* Child components, markers, etc., can be added here */}
    //     </GoogleMap>
    //   ) : (
    //     <div>Map loading...</div>
    //   )
    <iframe
      className={styles.map}
      frameBorder="0"
      style={{ border: 0 }}
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Mudanzas+Tcolau,Pobla+de+Vallbona+Valencia`}
      allowFullScreen
    ></iframe>
  )
}

export default GoogleMaps
