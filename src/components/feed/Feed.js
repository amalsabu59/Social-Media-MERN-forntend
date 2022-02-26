import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import { useEffect, useState } from 'react'
import axios from "axios"


function Feed({ username }) {
  const [posts, setPosts] = useState([])

  // const profile = async () => {
  //   const res = await axios.get("/posts/profile/" +username)
  //   console.log(res.data)
  // }
  // profile()

  useEffect(() => {
     const fetchPosts = async () => {
       const res = username ? await axios.get("/posts/profile/" +username) : await axios.get("posts/timeline/6211366d7af7b6f074c148ce" );
       setPosts(res.data.sort((p1, p2) => {
           return new Date(p2.createdAt) - new Date(p1.createdAt);
         })
       );
      
     };
     fetchPosts();
   }, [username]);
  return (
    <div className='feed'>
      
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))} 
        
      </div>
    
    </div>
  )
}

export default Feed