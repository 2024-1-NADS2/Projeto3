import React from 'react'
import "./Feed.css"
import NavBar from "../../components/NavBar/NavBar.jsx"
import CreatePostContainer from '../../components/Containers/CreatePostContainer/CreatePostContainer.jsx'
import TextInput from '../../components/Form/TextInput/TextInput.jsx'
import PostContainer from '../../components/Containers/PostContainer/PostContainer.jsx'
import ImagemMold from '../../components/ImagemMold/ImagemMold.jsx'
import NewsContainer from '../../components/Containers/NewsContainer/NewsContainer.jsx'

const Feed = () => {
  return (
    <div>
      <div className="container">
        <div className="column">
          <NavBar/>
        </div>
        <div className="main-column">
        <CreatePostContainer>
          <ImagemMold/>
          <TextInput/>
        </CreatePostContainer>
        <PostContainer/>
        </div>
        <div className="column">
          <NewsContainer/>
        </div>
      </div>
    </div>
  )
  
}

export default Feed