import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import PostContainer from '../../components/Containers/PostContainer/PostContainer'



const Perfil = () => {

  const comments = [
    { userName: 'João', text: 'Ótima postagem!', userImageSrc: 'https://static.wixstatic.com/media/b822d0_4617102be0c34474a879b32347084969~mv2.jpg/v1/fill/w_318,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rb-home-1.jpg' },
    { userName: 'Maria', text: 'Concordo plenamente.', userImageSrc: 'https://static.wixstatic.com/media/b822d0_4617102be0c34474a879b32347084969~mv2.jpg/v1/fill/w_318,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rb-home-1.jpg' },
    { userName: 'Carlos', text: 'Muito inspirador.', userImageSrc: 'https://static.wixstatic.com/media/b822d0_4617102be0c34474a879b32347084969~mv2.jpg/v1/fill/w_318,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rb-home-1.jpg' }
  ];

  return (
    <div>
      <div className="container">
      <div className="column">
        <NavBar />
      </div>
      <div className="main-column">
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
      </div>
    </div>
    </div>
  )
}

export default Perfil
