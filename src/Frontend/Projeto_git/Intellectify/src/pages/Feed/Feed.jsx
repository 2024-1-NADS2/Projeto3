import React from 'react'
import "./Feed.css"
import NavBar from "../../components/NavBar/NavBar.jsx"
import CreatePostContainer from '../../components/Containers/CreatePostContainer/CreatePostContainer.jsx'
import TextInput from '../../components/Form/TextInput/TextInput.jsx'

const Feed = () => {
  return (
    <div>
        <NavBar/>
        <div>
          <CreatePostContainer>
            <TextInput/>
          </CreatePostContainer>
        </div>
    </div>
  )
}

export default Feed