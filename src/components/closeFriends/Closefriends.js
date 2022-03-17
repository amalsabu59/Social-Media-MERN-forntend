import { dividerClasses } from '@mui/material';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './closefriends.css'


function Closefriends({friends}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const{user: currentUser, dispatch} = useContext(AuthContext)

  const handleClick = async () => {
    try {
       await axios.put("/users/"+friends._id+"/unfollow" ,{userId:currentUser._id})  
      }catch(err){
        console.log(err)
      }
    }
  return (
   
      <li className="sidebarFriend">
        
      <>
      <img className='sidebarFriendImg' src={friends.profilePicture ? PF + friends.profilePicture : PF + "person/noAvatar.png" } alt="" />
      
      </>
      <span className="sidebarFriendName">{friends.username}</span>

      <button className="rightbarFollowButton" onClick={handleClick}>unfollow</button>
    
   
     </li>
 
  )
}

export default Closefriends