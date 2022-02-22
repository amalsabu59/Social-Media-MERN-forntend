import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Post() {
  return (
    <div className='post'>
        <div className="PostWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src="assets/person/1.jpg" alt="" />
                    <span className="postUsername">Elon Musk</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRighrt">
                <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">hey its my first post</span>
                <img className='postImg' src="assets/posts/1.jpg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="http://www.vectorico.com/wp-content/uploads/2018/02/Facebook-Heart-300x300.png" alt="" />
                    <img className='likeIcon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Facebook_Like_button.svg/1024px-Facebook_Like_button.svg.png" alt="" />
                    <span className="postLikeCounter">32 people liked it</span>            
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