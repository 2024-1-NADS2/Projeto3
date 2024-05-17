import "./ProfileMold.css"

const ImagemMold = ({ src }) => {
  return (
    <div className="round-image-container"> {/* Usa a classe do container */}
      <div className="round-image">
        <img src={src} alt="imagem" />
      </div> {/* Usa a classe da imagem */}
    </div>
  );
}



export default ImagemMold