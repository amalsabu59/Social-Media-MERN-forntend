
import './onine.css'
import axios from 'axios'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';


function Online( {user} ) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const{user: currentUser, dispatch} = useContext(AuthContext)
  const [followed, setFollowed] = useState(null)
  

  console.log(followed,"cuurrent ser");

  useEffect(() => {
    const getFriends = async () => {
      try{
          const friendList = await axios.get("/users/friends/"+user._id)
          setFollowed(friendList.data)
      }catch(err){
          console.log(err)
      }
    }
    getFriends()
  }, [user])

// useEffect(()=>{
//   setFollowed(currentUser.followings.includes(user?.id))
// },[currentUser,user.id])

  const handleClick = async () => {
    try {
      if(!followed){
        await axios.put("/users/"+user._id+"/unfollow" ,{userId:currentUser._id})
        dispatch({type:"UNFOLLOW",payload:user._id})
        
      } else {
        await axios.put("/users/"+user._id+"/follow",{userId:currentUser._id})
        dispatch({type:"FOLLOW",payload:user._id})
      }
      // setFollowed(!followed)
    }catch(err) {
      console.log(err)
    }
   
  }
// followed._id.filter(
//     (following) => following === followed.username
    
  // )
  
  return (
    
   <li className="rightbarFriend">
    <div className="rightbarProfileContainer">
      <img className='rightbarProfileImg' src={user.profilePicture ? PF + user.profilePicture : PF + "noAvatar.png" } alt="" />
      <span className="rightbarOnline"></span>
    </div>
    <span  className='rightbarUsername'>{user.username}</span>
    <button className="rightbarFollowButton" onClick={handleClick} >
          {followed ? "Follow" : "Unfollow" }
          {followed ? <AddIcon/>  : <RemoveIcon /> }
          </button>
  </li>
  )
}

export default Online