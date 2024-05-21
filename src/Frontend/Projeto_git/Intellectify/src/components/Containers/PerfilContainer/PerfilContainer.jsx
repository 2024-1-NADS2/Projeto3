import React from 'react';
import './PerfilContainer.css';
import Paisagem from '../../../assets/paisagem-natural.png';
import ProfileMold from '../../ImagemMold/ProfileMold'

const PerfilContainer = () => {
  return (
      <div className="box">
        <img src={Paisagem} alt="img paisagem" className='box-paisagem' />
        <div className="perfilImage">
          <ProfileMold userImage={"https://static.wixstatic.com/media/b822d0_4617102be0c34474a879b32347084969~mv2.jpg/v1/fill/w_318,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rb-home-1.jpg"}/>
        </div>
        <div className="info-container">
          <div className="meio">
            <div className="info-block">
              <p className="title">Fernanda Lopes Santos</p>
              <p className="text">@Fer_santos</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PerfilContainer;