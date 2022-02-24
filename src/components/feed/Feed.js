import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import {Posts} from "../../dummyData"
import { useEffect, useState } from 'react'
import axios from "axios"

function Feed() {
  const [posts, setPosts] = useState([])
 

  useEffect(() => {
    const fetchPosts = async ()=> {
      const res = await axios.get("posts/timeline/621136507af7b6f074c148cc")
      setPosts(res.data)
    }
   fetchPosts()
  
  

  }, [])
  
  return (
    <div className='feed'>
      
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))} 
        
      </div>
    
    </div>
  )
}

export default Feed