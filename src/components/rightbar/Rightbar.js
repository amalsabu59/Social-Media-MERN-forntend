import './rightbar.css'
import { Users } from '../../dummyData';
import Online from '../online/Online';

function Rightbar( {profile}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER; 
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
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">Relationship :</span>
            <span className="rightbarInfoValue">Complicated</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>

        <div className="rightbarfollowings">

          <div className="rightbarFollowing">
            <img src={`${PF}person/3.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Cater</span>
          </div>

          <div className="rightbarFollowing">
            <img src={`${PF}person/3.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Cater</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Cater</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/2.png" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Cater</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/4.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Cater</span>
          </div>

          <div className="rightbarFollowing">
            <img src="assets/person/2.png" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Cater</span>
          </div>

          

        </div>
        
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
     { profile ? <ProfileRightbar/> : <HomeRightbar /> }

      </div>
    </div>
  )
}

export default Rightbar