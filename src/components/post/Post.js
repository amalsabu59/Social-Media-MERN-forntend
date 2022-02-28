import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext, useEffect, useState } from 'react';
import axios from "axios"
import { format } from 'timeago.js';
import { Link } from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';


function Post({ post }) {
    const {user:currentUser} = useContext(AuthContext)
    const [like, setLike] = useState(post.likes.length)
    const [isliked, setIslike] = useState(false)
    const [user, setUser] = useState({ })
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    

    
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`)
      setUser(res.data)
      console.log(user,"fucked up");
    }
   fetchUser()
  }, [post.userId])
   
    const likeHandler = () => {
        try{
            axios.put("/posts/"+post._id+"/like",{userId:currentUser._id})
        }
        catch(err){

        }
        setLike(isliked ? like-1 : like +1 )
        setIslike(!isliked )
    
    }

  return (
    <div className='post'>
        <div className="PostWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`profile/${user.username}`}>
                    <img className='postProfileImg' src={user.profilePicture || "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="} alt="" />
                    </Link>
                    <span className="postUsername"> 
                    {user.username} </span>
                    <span className="postDate">{ format(post.createdAt) }</span>
                </div>
                <div className="postTopRighrt">
                <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img className='postImg' src={post.img} alt="" />
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