import "./PostContainer.css"
import PostMold from '../../ImagemMold/PostMold.jsx'
import { PiHeartBold } from "react-icons/pi";
import { PiHeartFill } from "react-icons/pi";
import ProfileMold from '../../ImagemMold/ProfileMold.jsx'
import { BiComment } from "react-icons/bi";
import React, { useState } from 'react';

const PostContainer = ({ userImageSrc, postImageSrc, userName, likes, comments }) => {
  
  const [showComments, setShowComments] = useState(false);
  const [liked, setLiked] = useState(false);
  const [inputComment, setInputComment] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  }

  const LikeButton = () => {
    setLiked(!liked);
  }

  const createComment = () =>{
    setInputComment(true)
  }

  return (
    <div className='PostContainer'>
      <div className="PostHeader">
        <ProfileMold src={userImageSrc}/>
        <h1>{userName}</h1>
      </div>
        <PostMold src={postImageSrc}/>
        <div className="icons-text">
          <div className="post-icones">
            {liked ? (
            <PiHeartFill
              color="red"
              onClick={LikeButton}
              style={{ cursor: 'pointer' }}
            />
          ) : (
            <PiHeartBold
              color="#575757"
              onClick={LikeButton}
              style={{ cursor: 'pointer' }}
            />
          )}
            <BiComment className='comment' onClick={createComment} />
          </div>
            <div className="likes-text">
              <p>{likes} pessoas curtiram seu post</p>
            </div>
        </div>
        <div className="post-text"> 
          <h1 className="post-title">{userName}:</h1>
          <h1 className="post-description">A “sorte” só encontra quem está preparado...</h1>
        </div>
        <div className="createSeeComment">
          {inputComment ? "qq coisa" : (
            <p className="create-comment" onClick={createComment}>
            Adicionar um comentário...
            </p>
          )}
          <p className="show-comments" onClick={toggleComments}>
          {showComments ? 'Esconder comentários' : 'Mostrar comentários'}
          </p>  
        </div>
      {showComments && <div className="divider"></div>}
      {showComments && (
        <div className="comments-section">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <ProfileMold src={comment.userImageSrc} />
              <div className="comment-content">
                <h2>{comment.userName}</h2>
                <p>{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PostContainer
