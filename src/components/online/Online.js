
import './onine.css'
import axios from 'axios'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';


function Online( {user} ) {


  const{user: currentUser, dispatch} = useContext(AuthContext)
  const [followed, setFollowed] = useState(currentUser.followings.includes(user?.id))
  console.log(followed,"folll");



useEffect(()=>{
  setFollowed(currentUser.followings.includes(user?.id))
},[currentUser,user.id])

  const handleClick = async () => {
    try {
      if(followed){
        await axios.put("/users/"+user._id+"/unfollow" ,{userId:currentUser._id})
        dispatch({type:"UNFOLLOW",payload:user._id})
        
      }else {
        await axios.put("/users/"+user._id+"/follow",{userId:currentUser._id})
        dispatch({type:"FOLLOW",payload:user._id})
      }
      setFollowed(!followed)
    }catch(err) {
      console.log(err)
    }
   
  }

  return (
    
    <li className="rightbarFriend">
    <div className="rightbarProfileContainer">
      <img className='rightbarProfileImg' src={user.profilePicture} alt="" />
      <span className="rightbarOnline"></span>
    </div>
    <span  className='rightbarUsername'>{user.username}</span>
    <button className="rightbarFollowButton" onClick={handleClick} >
          {followed ? "unFollow" : "Follow" }
          {followed ? <RemoveIcon /> : <AddIcon/> }
          </button>
  </li>
  )
}

export default Online