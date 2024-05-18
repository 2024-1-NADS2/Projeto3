import './Feed.css';
import NavBar from '../../components/NavBar/NavBar.jsx';
import CreatePostContainer from '../../components/Containers/CreatePostContainer/CreatePostContainer.jsx';
import TextInput from '../../components/Form/TextInput/TextInput.jsx';
import PostContainer from '../../components/Containers/PostContainer/PostContainer.jsx';
import ImagemMold from '../../components/ImagemMold/ProfileMold.jsx';
import NewsContainer from '../../components/Containers/NewsContainer/NewsContainer.jsx';
import logobranca from '../../assets/logo-branca.png';

const Feed = () => {

  const comments = [
    { userName: 'João', text: 'Ótima postagem!', userImageSrc: 'https://static.wixstatic.com/media/b822d0_4617102be0c34474a879b32347084969~mv2.jpg/v1/fill/w_318,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rb-home-1.jpg' },
    { userName: 'Maria', text: 'Concordo plenamente.', userImageSrc: 'https://static.wixstatic.com/media/b822d0_4617102be0c34474a879b32347084969~mv2.jpg/v1/fill/w_318,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rb-home-1.jpg' },
    { userName: 'Carlos', text: 'Muito inspirador.', userImageSrc: 'https://static.wixstatic.com/media/b822d0_4617102be0c34474a879b32347084969~mv2.jpg/v1/fill/w_318,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rb-home-1.jpg' },
    { userName: 'Carlos', text: 'Muito inspirador.', userImageSrc: 'https://static.wixstatic.com/media/b822d0_4617102be0c34474a879b32347084969~mv2.jpg/v1/fill/w_318,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rb-home-1.jpg' }
  ];

  return (
    <div className="container">
      <div className="column">
        <NavBar />
      </div>
      <div className="main-column">
        <CreatePostContainer>
          <ImagemMold src="https://static.wixstatic.com/media/b822d0_4617102be0c34474a879b32347084969~mv2.jpg/v1/fill/w_318,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/rb-home-1.jpg" />
          <TextInput className="width"/>
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
  );
};

export default Feed;
