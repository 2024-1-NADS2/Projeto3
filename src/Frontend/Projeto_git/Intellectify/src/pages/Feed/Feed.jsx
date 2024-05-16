import React from 'react'
import "./Feed.css"
import NavBar from "../../components/NavBar/NavBar.jsx"
import CreatePostContainer from '../../components/Containers/CreatePostContainer/CreatePostContainer.jsx'
import TextInput from '../../components/Form/TextInput/TextInput.jsx'
import PostContainer from '../../components/Containers/PostContainer/PostContainer.jsx'
import ImagemMold from '../../components/ImagemMold/ImagemMold.jsx'

const Feed = () => {
  return (
    <div>
      <div class="container">
        <div class="column">
          <NavBar/>
        </div>
        <div class="main-column">
        <CreatePostContainer>
            {/* <ImagemMold/> */}
            <TextInput/>
            <TextInput/>
        </CreatePostContainer>
        <PostContainer/>
        </div>
        <div class="column">
        </div>
      </div>
    </div>
  )
}

export default Feed