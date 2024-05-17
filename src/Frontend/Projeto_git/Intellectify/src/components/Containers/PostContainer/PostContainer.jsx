import React from 'react'
import "./PostContainer.css"
import PostMold from '../../ImagemMold/PostMold.jsx'
import { LuHeart } from "react-icons/lu";
import ImagemMold from '../../ImagemMold/ProfileMold.jsx'
import { BiComment } from "react-icons/bi";

const PostContainer = ({ userImageSrc, postImageSrc, userName, likes }) => {
  return (
    <div className='PostContainer'>
      <div className="PostHeader">
        <ImagemMold src={userImageSrc}/>
        <h1>{userName}</h1>
      </div>
        <PostMold src={postImageSrc}/>
        <div className="post-icones">
          <LuHeart/>
          <BiComment className='comment'/>
        </div>
        <div className="post-text">
          <p>{likes} pessoas curtiram seu post</p>
        </div>
    </div>
  )
}

export default PostContainer
