import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData';
import { useState } from 'react';

function Post( {post} ) {
    const [like, setLike] = useState(post.like)
    const [isliked, setIslike] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
   
    const likeHandler = () => {
        setLike(isliked ? like-1 : like +1 )
        setIslike(!isliked )
    
    }
  
  return (
    <div className='post'>
        <div className="PostWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={Users.filter((u) => u.id === post.userId)[0].ProfilePicture} alt="" />
                    <span className="postUsername"> 
                    {Users.filter((u) => u.id === post.userId)[0].username} </span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRighrt">
                <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img className='postImg' src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' onClick={likeHandler} src="http://www.vectorico.com/wp-content/uploads/2018/02/Facebook-Heart-300x300.png" alt=""  />
                    <img className='likeIcon' onClick={likeHandler}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Facebook_Like_button.svg/1024px-Facebook_Like_button.svg.png" alt="" />
                    <span className="postLikeCounter"> {like} people liked it</span>            
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 Comments</span>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Post