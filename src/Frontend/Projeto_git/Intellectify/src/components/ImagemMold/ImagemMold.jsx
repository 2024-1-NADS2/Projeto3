import React from 'react'
import "./ImagemMold.css"

const ImagemMold = () => {
  return (
    <div className="round-image-container"> {/* Usa a classe do container */}
      <div className="round-image">
        <img src="https://static.wixstatic.com/media/b822d0_4617102be0c34474a879b32347084969~mv2.jpg/v1/fill/w_318,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rb-home-1.jpg" alt="imagem" />
      </div> {/* Usa a classe da imagem */}
    </div>
  )
}

export default ImagemMold