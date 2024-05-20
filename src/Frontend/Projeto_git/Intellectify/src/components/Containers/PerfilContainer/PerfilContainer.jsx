import React from 'react';
import './PerfilContainer.css';
import Paisagem from '../../../assets/paisagem-natural.png';

const Perfil = () => {
  return (
    <div className="big-box">
      <div className="boxi">
        <img src={Paisagem} alt="img paisagem" />
        <div className="info-container">

          <div class="ponta">
            <div className="info-block">
              <p className="title">Universidade</p>
              <p className="subtitle">Universidade Presbiteriana Mackenzie</p>
            </div>
          </div>


          <div class="meio">
            <div className="info-block">
              <p className="title">Fernanda Lopes Santos</p>
              <p className="text">@Fer_santos</p>
              <p className="text">São Paulo, São Paulo, Brasil</p>
            </div>
          </div>

          <div class="final">
            <div className="info-block">
              <p className="title">Curso</p>
              <p className="text">Arquitetura e Urbanismo</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PerfilContainer;