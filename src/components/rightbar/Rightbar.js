import './rightbar.css'
import Online from '../online/Online';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Rightbar( {user} ) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER; 
  const [friends, setFriends] = useState([])
  const{user: currentUser, dispatch} = useContext(AuthContext)
  const [followed, setFollowed] = useState(currentUser.followings.includes(user?.id))
  const [allusers, setAllusers] = useState([])



useEffect(() => {
 const fetchUser = async () => {
   try{
    const res = await axios.get("/users/suggested/"+currentUser._id)
    setAllusers(res.data)
   }catch(err){
    console.log(err)
}
   
 }
 fetchUser()
}, [])

console.log(allusers)

useEffect(() => {
  const getFriends = async () => {
    try{
        const friendList = await axios.get("/users/friends/"+user._id)
        setFriends(friendList.data)
    }catch(err){
        console.log(err)
    }
  }
  getFriends()
}, [user])
console.log(user);

const handleClick = async () => {
  try {
    if(!followed){
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

  const HomeRightbar = () => {
    
    return (
      <>
             <div className="birthdayContainer">
          <img className='birthdayImg' src="https://www.downloadclipart.net/large/birthday-gift-png-clipart.png" alt="" />
          <span className="birthdayText">
            <b>Jeff</b> and<b> 3 others</b> have birthday today
          </span>
        </div>
        {/* <img className='rightbarAd' src="https://i.pinimg.com/564x/11/66/38/116638d3f142cbd7cff7cab15c53045c.jpg" alt="" /> */}
        <img className='rightbarAd' src="https://edge.zivost.com/wp-content/uploads/2021/09/Cover.jpg" alt="" />
        <h4 className="rightbarTitle">People You May Know</h4>
        <ui className="rightbarFriendList">
         { allusers.map((u)=> (
           < Online key={u.id} user={u} />
         ))}
        </ui>
        </>
    )
  }
  const ProfileRightbar = () => {
    return(
      <>
      {user.username !== currentUser.username && (
        <button className="rightbarFollowButton" onClick={handleClick}>
          {followed ? "unFollow" : "Follow" }
          {followed ? <RemoveIcon /> : <AddIcon/> }
          </button>
      )}
        <h4 className='rightbarTitle'>User information</h4>

        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">City :</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">Relationship :</span>
            <span className="rightbarInfoValue">{user.relationship ===1 ? "Married" : "Single"}</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>

        <div className="rightbarfollowings">
          {friends.map((friend)=> (
            <Link to={friend.username} style={{textDecoration:"none"}}>
            <div className="rightbarFollowing">
            <img src={friend.profilePicture ? PF + friend.profilePicture : PF + "noAvatar.png" } alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">{friend.username}</span>
          </div>
          </Link>
          ))}
          

         
          

        </div>
        
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
     { user ? <ProfileRightbar/> : <HomeRightbar /> }

      </div>
    </div>
  )
}

export default Rightbar