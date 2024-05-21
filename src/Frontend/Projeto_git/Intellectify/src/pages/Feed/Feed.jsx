import React, { useEffect, useState } from 'react';
import './Feed.css';
import NavBar from '../../components/NavBar/NavBar.jsx';
import CreatePostContainer from '../../components/Containers/CreatePostContainer/CreatePostContainer.jsx';
import TextInput from '../../components/Form/TextInput/TextInput.jsx';
import PostContainer from '../../components/Containers/PostContainer/PostContainer.jsx';
import ImagemMold from '../../components/ImagemMold/ProfileMold.jsx';
import NewsContainer from '../../components/Containers/NewsContainer/NewsContainer.jsx';
import logobranca from '../../assets/logo-branca.png';
import { IoMdImage } from "react-icons/io";
import { HiMiniPlay } from "react-icons/hi2";
import { pegarUsuario } from '../../ApiFunctions/UsuarioFunctions'; // Ajuste o caminho conforme necessário
import perfilVazio from '../../assets/perfilVazio.png';
import { pegarTodosPosts } from '../../ApiFunctions/PostFunctions.jsx';
import MenuHamburger from '../../components/MenuHamburguer/Menuburger.jsx';


const Feed = () => {

  const [userEmail, setUserEmail] = useState('');
  const [userData, setUserData] = useState(null);
  let posts;

  useEffect(() => {
    // Recupera o email do localStorage quando o componente é montado
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setUserEmail(savedEmail);
      // Chama a função pegarUsuario para obter os dados do usuário
      const fetchUserData = async () => {
        try {
          const data = await pegarUsuario(savedEmail);
          setUserData(data);
        } catch (error) {
          console.error('Erro ao obter os dados do usuário:', error);
        }
      };
      fetchUserData();
      
      posts = pegarTodosPosts();
    }
  }, []);

  const comments = [
    { userName: 'João', text: 'Ótima postagem!', userImageSrc: 'https://static.wixstatic.com/media/b822d0_4617102be0c34474a879b32347084969~mv2.jpg/v1/fill/w_318,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rb-home-1.jpg' },
    { userName: 'Maria', text: 'Concordo plenamente.', userImageSrc: 'https://static.wixstatic.com/media/b822d0_4617102be0c34474a879b32347084969~mv2.jpg/v1/fill/w_318,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rb-home-1.jpg' },
    { userName: 'Carlos', text: 'Muito inspirador.', userImageSrc: 'https://static.wixstatic.com/media/b822d0_4617102be0c34474a879b32347084969~mv2.jpg/v1/fill/w_318,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rb-home-1.jpg' },
    { userName: 'Carlos', text: 'Muito inspirador.', userImageSrc: 'https://static.wixstatic.com/media/b822d0_4617102be0c34474a879b32347084969~mv2.jpg/v1/fill/w_318,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rb-home-1.jpg' }
  ];

  console.log("userdata", userData)

  return (
    <div className="feedBackgroundColor">
      <div className="feedContainer">
        <div className="column">
          <NavBar userImage={userData && userData.imagem || perfilVazio}/>
          <div className="burgermenufeed"><MenuHamburger/></div>
        </div>
        <div className="main-column">
          <CreatePostContainer>   
            <ImagemMold src={perfilVazio}/>
            <div className="textin"><TextInput type="textarea"/></div>
            <div className="image-icone">
              <IoMdImage color="#575757"></IoMdImage>
              <HiMiniPlay color="#575757"/>
            </div>
          </CreatePostContainer>
          <div className="postContainerFeed">
            <PostContainer
              userImageSrc="https://static.wixstatic.com/media/b822d0_4617102be0c34474a879b32347084969~mv2.jpg/v1/fill/w_318,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rb-home-1.jpg"
              userName="Guilherme"
              postImageSrc="https://static.wixstatic.com/media/b822d0_8e8436d144ff4c3abb6bed1db62ea354~mv2.png/v1/fill/w_1854,h_446,al_t,q_90,enc_auto/b822d0_8e8436d144ff4c3abb6bed1db62ea354~mv2.png"
              likes="10"
              comments={comments}
            />
            <PostContainer
              userImageSrc="https://static.wixstatic.com/media/b822d0_4617102be0c34474a879b32347084969~mv2.jpg/v1/fill/w_318,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rb-home-1.jpg"
              userName="Guilherme"
              postImageSrc="https://static.wixstatic.com/media/b822d0_8e8436d144ff4c3abb6bed1db62ea354~mv2.png/v1/fill/w_1854,h_446,al_t,q_90,enc_auto/b822d0_8e8436d144ff4c3abb6bed1db62ea354~mv2.png"
              likes="10"
              comments={comments}
            />
            <PostContainer
              userImageSrc="https://static.wixstatic.com/media/b822d0_4617102be0c34474a879b32347084969~mv2.jpg/v1/fill/w_318,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rb-home-1.jpg"
              userName="Guilherme"
              postImageSrc="https://static.wixstatic.com/media/b822d0_8e8436d144ff4c3abb6bed1db62ea354~mv2.png/v1/fill/w_1854,h_446,al_t,q_90,enc_auto/b822d0_8e8436d144ff4c3abb6bed1db62ea354~mv2.png"
              likes="10"
              comments={comments}
            />
            <PostContainer
              userImageSrc="https://static.wixstatic.com/media/b822d0_4617102be0c34474a879b32347084969~mv2.jpg/v1/fill/w_318,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rb-home-1.jpg"
              userName="Guilherme"
              postImageSrc="https://static.wixstatic.com/media/b822d0_8e8436d144ff4c3abb6bed1db62ea354~mv2.png/v1/fill/w_1854,h_446,al_t,q_90,enc_auto/b822d0_8e8436d144ff4c3abb6bed1db62ea354~mv2.png"
              likes="10"
              comments={comments}
            />
            <PostContainer
              userImageSrc="https://static.wixstatic.com/media/b822d0_4617102be0c34474a879b32347084969~mv2.jpg/v1/fill/w_318,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rb-home-1.jpg"
              userName="Guilherme"
              postImageSrc="https://static.wixstatic.com/media/b822d0_8e8436d144ff4c3abb6bed1db62ea354~mv2.png/v1/fill/w_1854,h_446,al_t,q_90,enc_auto/b822d0_8e8436d144ff4c3abb6bed1db62ea354~mv2.png"
              likes="10"
              comments={comments}
            />
          </div>
        </div>
        <div className="column">
          <div className="column-dir">
            <NewsContainer />
            <img src={logobranca} alt="logo branca" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
