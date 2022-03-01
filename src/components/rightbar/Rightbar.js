import './rightbar.css'
import { Users } from '../../dummyData';
import Online from '../online/Online';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Rightbar( {user} ) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER; 

  const [friends, setFriends] = useState([])
  console.log(friends)

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
}, [user._id])



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
        <h4 className="rightbarTitle">Online Friends</h4>
        <ui className="rightbarFriendList">
         { Users.map((u)=> (
           < Online key={u.id} user={u} />
         ))}
        </ui>
        </>
    )
  }
  const ProfileRightbar = () => {
    return(
      <>
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

            <div className="rightbarFollowing">
            <img src={friend.profilePicture} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">{friend.username}</span>
          </div>

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