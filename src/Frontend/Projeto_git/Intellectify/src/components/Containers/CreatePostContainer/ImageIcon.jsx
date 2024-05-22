import React, { useState } from 'react';
import './ImageIcon.css'
import { IoMdImage } from "react-icons/io";

const ImageIcon = ({onImageChange}) => {

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // A função onloadend é chamada quando a operação de leitura é concluída
      // reader.result contém a imagem codificada em base64
      const base64Image = reader.result;
      onImageChange(base64Image); // Chama a função onImageChange com a imagem em base64 como argumento
    };

    // Leitura do arquivo como URL de dados base64
    reader.readAsDataURL(selectedImage);
  };

  return (
      <div className="image-upload">
        <label htmlFor="image-upload">
          <IoMdImage color="#575757" className="upload-icon" />
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      </div>
  );
};

export default ImageIcon;