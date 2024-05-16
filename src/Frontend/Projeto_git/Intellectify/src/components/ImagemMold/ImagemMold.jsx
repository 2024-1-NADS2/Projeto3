import React from 'react'
import "./ImagemMold.css"

const ImagemMold = () => {
  return (
    <div className="round-image-container"> {/* Usa a classe do container */}
      <img src={src} alt={alt} className="round-image" /> {/* Usa a classe da imagem */}
    </div>
  )
}

export default ImagemMold