import "./ProfileMold.css"
import { Link, useActionData } from "react-router-dom"
import perfilVazio from '../../assets/perfilVazio.png';

const ImagemMold = ({ userImage }) => {

  if(userImage === null || userImage === "")
    {
      userImage = perfilVazio
    }

  return (
    <div className="round-image-container"> {/* Usa a classe do container */}
      <div className="round-image">
        <Link to="/perfil"><img src={userImage} alt="imagem" /></Link>
      </div> {/* Usa a classe da imagem */}
    </div>
  );
}



export default ImagemMold