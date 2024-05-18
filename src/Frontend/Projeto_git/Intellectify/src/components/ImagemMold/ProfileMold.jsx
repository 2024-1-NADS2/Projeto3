import "./ProfileMold.css"
import { Link } from "react-router-dom"

const ImagemMold = ({ src }) => {
  return (
    <div className="round-image-container"> {/* Usa a classe do container */}
      <div className="round-image">
        <Link to="/perfil"><img src={src} alt="imagem" /></Link>
      </div> {/* Usa a classe da imagem */}
    </div>
  );
}



export default ImagemMold